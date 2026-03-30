import { list, put, del } from "@vercel/blob";

export interface QuizResultRecord {
  id: string;
  slug: string;
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  submittedAt: string;
}

const RESULTS_PREFIX = "quiz-results/";

function getResultPath(slug: string, id: string): string {
  return `${RESULTS_PREFIX}${slug}/${id}.json`;
}

export async function saveResult(
  result: Omit<QuizResultRecord, "id" | "submittedAt">
): Promise<QuizResultRecord> {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const record: QuizResultRecord = {
    ...result,
    id,
    submittedAt: new Date().toISOString(),
  };

  await put(getResultPath(result.slug, id), JSON.stringify(record), {
    access: "public",
    contentType: "application/json",
  });

  return record;
}

export async function getResultsBySlug(
  slug: string
): Promise<QuizResultRecord[]> {
  const { blobs } = await list({
    prefix: `${RESULTS_PREFIX}${slug}/`,
  });

  const results: QuizResultRecord[] = [];

  for (const blob of blobs) {
    try {
      const res = await fetch(blob.url);
      const data = (await res.json()) as QuizResultRecord;
      results.push(data);
    } catch {
      // skip corrupted entries
    }
  }

  return results.sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

export async function getAllResults(): Promise<QuizResultRecord[]> {
  const { blobs } = await list({
    prefix: RESULTS_PREFIX,
  });

  const results: QuizResultRecord[] = [];

  for (const blob of blobs) {
    try {
      const res = await fetch(blob.url);
      const data = (await res.json()) as QuizResultRecord;
      results.push(data);
    } catch {
      // skip corrupted entries
    }
  }

  return results.sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

export async function deleteResult(slug: string, id: string): Promise<boolean> {
  const { blobs } = await list({
    prefix: `${RESULTS_PREFIX}${slug}/`,
  });

  const target = blobs.find((b) => b.pathname.includes(id));
  if (!target) return false;

  await del(target.url);
  return true;
}
