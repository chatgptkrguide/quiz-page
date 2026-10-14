import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "식단하조-소개",
    title: "식단하조 조모임 상세 설명",
    description:
      "먹는 걸 기록하면, 몸이 달라진다.\n설명을 읽고 퀴즈로 확인해보세요.",
    logo: "/logo-식단하조.png",
    theme: "식단하조",
    lessons: [
      {
        id: "diet-l1",
        title: "식단하조란?",
        content:
          "밥 먹을 때마다 카톡에 올리고,\n서로 구경하는 모임이에요.\n\n**식단 기록**, **영양분 인식**, **함께 공유**\n이 세 가지가 핵심입니다.",
        highlight: "식단 기록 + 영양분 인식 + 함께 공유",
      },
      {
        id: "diet-l2",
        title: "기록 방법",
        content:
          "매번 먹는 음식을\n카톡에 **텍스트로 기록**합니다.\n\n**꼭 + 로 시작**해서\n뭘 얼마나 먹었는지 간단히 적어요.\n\n예시)\n**+햇반 1개, 계란후라이 2개, 닭가슴살 100g**\n\n**+ 가 없는 글**은 그냥 대화로 보고\n기록하지 않아요.\n\n**사진은 필수가 아닙니다.**\n텍스트만 올려도 괜찮아요.",
        highlight: "+ 로 시작해서 텍스트로 기록 (사진 선택)",
      },
      {
        id: "diet-l3",
        title: "칼로리 확인",
        content:
          "칼로리와 탄·단·지는\n**코가(봇)가 자동으로 계산**해요.\n조원은 기록만 하면 됩니다.\n\n올린 뒤 **30분 안에** 사이트에 반영돼요.\n**sikdan-hajo.vercel.app**\n\n단, 양을 안 적거나 단위가 애매하면\n많거나 적게 나올 수 있어요.\n\n이상하면 톡방에서 **\"코가야 내 링크\"** 라고 하고\n받은 **내 페이지에서 ✏️ 로 직접 고치거나**,\n톡방에 말해주세요.",
        highlight: "자동 계산 / 이상하면 \"코가야 내 링크\" → 내 페이지에서 ✏️",
      },
      {
        id: "diet-l4",
        title: "활동 계획 — 3단계",
        content:
          "한 번에 다 바꾸는 게 아니라,\n**단계별**로 진행합니다.\n\n**01. 첫 한 주** — 관찰\n지금 뭘 먹는지, 기록 자체에 집중\n\n**02. 2주차** — 목표 설정\n칼로리 확인 후 나만의 목표\n예) 단백질 120g↑ / 2,000kcal↓ / 야식 주2↓\n\n**03. 3주차~** — 실천\n매일 기록, 서로 공유하며 꾸준히",
        highlight: "관찰 → 목표 설정 → 매일 기록 & 실천",
      },
      {
        id: "diet-l5",
        title: "매일 밤 10시 정산",
        content:
          "매일 **밤 10시**에 코가가\n그날 기록을 정리해서 톡방에 올려요.\n\n· 기록한 사람 — 칼로리 · 탄·단·지\n· 아직 기록 안 한 사람 명단\n\n**하루의 기준은 새벽 2시**\n자정 넘어 올린 야식은 전날 기록이에요.\n\n1~2끼만 올려도 **그날은 기록한 것**으로\n잡혀요. (목표 달성 여부는 따로 봅니다)",
        highlight: "밤 10시 정산 / 하루 기준은 새벽 2시",
      },
    ],
    questions: [
      {
        id: "diet-q1",
        type: "multiple-choice",
        question: "식단하조의 핵심 활동 3가지가 아닌 것은?",
        options: [
          { id: "a", text: "식단 기록" },
          { id: "b", text: "영양분 인식" },
          { id: "c", text: "운동 인증" },
          { id: "d", text: "함께 공유" },
        ],
        correctAnswer: "c",
        explanation: "핵심은 식단 기록, 영양분 인식, 함께 공유 세 가지예요.",
      },
      {
        id: "diet-q-plus",
        type: "multiple-choice",
        question: "다음 중 식단으로 기록되는 카톡 글은?",
        options: [
          { id: "a", text: "김밥 1줄 먹었어요" },
          { id: "b", text: "+김밥 1줄, 라면 200g" },
          { id: "c", text: "점심 — 김밥 1줄" },
          { id: "d", text: "#김밥 1줄" },
        ],
        correctAnswer: "b",
        explanation: "+ 로 시작하는 글만 식단으로 기록돼요. + 가 없으면 그냥 대화로 봅니다.",
      },
      {
        id: "diet-q2",
        type: "ox",
        question: "식단 기록 시 사진을 반드시 찍어서 올려야 한다.",
        correctAnswer: false,
        explanation: "사진은 필수가 아닙니다. 텍스트만 올려도 괜찮아요.",
      },
      {
        id: "diet-q3",
        type: "multiple-choice",
        question: "칼로리 계산은 누가 하나요?",
        options: [
          { id: "a", text: "각자 직접 계산해서 올린다" },
          { id: "b", text: "코가(봇)가 자동으로 계산한다" },
          { id: "c", text: "매주 한 번 모여서 같이 계산한다" },
          { id: "d", text: "계산하지 않는다" },
        ],
        correctAnswer: "b",
        explanation: "올린 글을 30분마다 자동으로 읽어서 칼로리와 탄·단·지를 계산해요. 조원은 기록만 하면 됩니다.",
      },
      {
        id: "diet-q4",
        type: "multiple-choice",
        question: "칼로리가 이상하게 나왔을 때 어떻게 해야 하나요?",
        options: [
          { id: "a", text: "그냥 넘어간다" },
          { id: "b", text: "내 페이지에서 ✏️ 로 직접 고치거나 톡방에 말한다" },
          { id: "c", text: "같은 글을 여러 번 다시 올린다" },
          { id: "d", text: "기록을 포기한다" },
        ],
        correctAnswer: "b",
        explanation: "톡방에서 \"코가야 내 링크\"라고 하면 코가가 내 페이지 주소를 알려줘요. 거기서 ✏️ 로 고칠 수 있고, 한 번 열어 두면 사이트 홈의 내 카드에도 ✏️ 가 보여요. 어렵다면 톡방에 말해주세요.",
      },
      {
        id: "diet-q5",
        type: "multiple-choice",
        question: "활동 1단계(첫 한 주)에 집중해야 할 것은?",
        options: [
          { id: "a", text: "칼로리 목표 달성" },
          { id: "b", text: "운동 병행" },
          { id: "c", text: "지금 내가 뭘 먹는지 관찰 — 기록 자체" },
          { id: "d", text: "체중 감량" },
        ],
        correctAnswer: "c",
        explanation: "첫 한 주는 뭘 먹는지 관찰하고, 기록 자체에 집중하는 단계예요.",
      },
      {
        id: "diet-q7",
        type: "ox",
        question: "3끼 중 1끼만 기록해도 그 날은 기록한 것으로 잡힌다.",
        correctAnswer: true,
        explanation: "1~2끼만 올려도 그날은 기록한 것으로 잡혀요. 다만 목표 달성 여부에는 영향이 있을 수 있어요.",
      },
      {
        id: "diet-q-recap",
        type: "multiple-choice",
        question: "코가가 그날 식단을 정리해서 톡방에 올려주는 시각은?",
        options: [
          { id: "a", text: "매일 아침 8시" },
          { id: "b", text: "매일 밤 10시" },
          { id: "c", text: "일요일 밤에만" },
          { id: "d", text: "글을 올릴 때마다" },
        ],
        correctAnswer: "b",
        explanation: "매일 밤 10시에 기록한 사람의 칼로리·탄단지와 아직 기록 안 한 사람을 정리해서 올려요.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 3, title: "식단 초보", description: "함께 배워가요" },
      { minScore: 4, maxScore: 6, title: "식단 중수", description: "조금만 더!" },
      { minScore: 7, maxScore: 8, title: "식단 마스터", description: "완벽하게 이해하셨네요!" },
    ],
  },
  {
    slug: "식단하조-사용법",
    title: "식단하조 웹사이트 사용법",
    description:
      "홈 · 리포트 · 음식 · 목표 4개 탭,\n한 번에 감 잡기.\n화면을 보면서 따라와 주세요.",
    logo: "/logo-식단하조.png",
    theme: "식단하조",
    lessons: [
      {
        id: "use-l1",
        title: "식단하조 웹사이트는?",
        content:
          "우리 조의 **식단 기록을 한눈에**\n확인할 수 있는 공식 사이트예요.\n\n주소: **sikdan-hajo.vercel.app**\n\n하단에 **4개의 메인 탭**\n\n**홈** — 오늘 멤버들 식단 현황\n**리포트** — 일간 / 주간\n**음식** — 영양소 정보 DB (2,000개+)\n**목표** — 계산기 & 멤버별 목표\n\n오른쪽 위 **기수 선택**으로\n지난 기수 기록도 볼 수 있어요.\n(처음 열면 항상 이번 기수)\n\n지금부터 하나씩 살펴볼게요.",
        highlight: "4개 메인 탭 + 기수 선택",
      },
      {
        id: "use-l7",
        title: "💬 기록은 카톡에서 — + 로 시작",
        content:
          "식단은 사이트가 아니라\n**카톡방에 올려요.**\n사이트 직접 입력은 **불필요**.\n\n**꼭 + 로 시작**\n**+김밥 1줄, 라면 200g**\n**+ 닭가슴살 100g, 현미밥 1공기**\n\n**+ 가 없는 글**은 그냥 대화로 보고\n기록하지 않아요.\n\n**30분마다** 자동으로 읽어서\n칼로리·탄단지를 계산해요.\n(새벽 2~8시는 쉬어요)\n\n수량·단위를 같이 적으면\n계산이 더 정확해져요.",
        highlight: "+ 로 시작해야 기록 / 30분마다 자동 반영",
      },
      {
        id: "use-l7b",
        title: "⏰ 끼니와 하루의 기준",
        content:
          "**끼니는 올린 시간으로 자동 분류**\n· 05~10시 → **아침**\n· 10~15시 → **점심**\n· 15~21시 → **저녁**\n· 그 외 → **간식**\n(글에 \"아침/점심/저녁/간식\"을 쓰면 그게 우선)\n\n**하루의 기준은 새벽 2시**\n자정을 넘겨 새벽 2시 전에 올린 야식은\n**전날 기록**으로 들어가요.",
        highlight: "시간대로 끼니 자동 분류 / 하루 기준은 새벽 2시",
      },
      {
        id: "use-l2",
        title: "① 홈 — 오늘 식단 현황",
        content:
          "홈 탭은 **오늘 날짜 기준**으로\n멤버들의 식단 기록을 보여줍니다.\n\n**날짜 이동**\n좌/우 화살표 = 전날/다음날\n**가운데 날짜 탭** = 오늘로 복귀\n(기록이 있는 기간 안에서만 움직여요)\n\n**카드 정보**\n· 이름 + **달성/미달성** 뱃지\n· **IF** 보라 뱃지 = 간헐적 단식 멤버\n· 총 칼로리 · 탄·단·지 그램\n· 단백질 목표 대비 부족량 표시\n\n**특별일**이면 파란 배너\n\"전원 자동 통과\" 표시\n\n자주 찾는 멤버는 **★ 즐겨찾기**로\n맨 위에 고정하고, **이름 검색**도 돼요.",
        highlight: "날짜 이동 / IF·달성 뱃지 / 즐겨찾기 고정 / 특별일 배너",
        image: {
          src: "/guide/01-home.png",
          alt: "식단하조 홈 화면 — 멤버별 칼로리와 탄단지 현황",
          caption: "홈 탭: 오늘 누가 얼마나 먹었는지 한눈에",
        },
      },
      {
        id: "use-l2b",
        title: "① 홈 — 카드 탭해서 더 보기 · 고치기",
        content:
          "**멤버 카드를 탭하면** 펼쳐지면서\n그날 먹은 **식사 목록**이 보여요.\n\n아침 / 점심 / 저녁 / 간식\n각 식사별로 음식 이름 + 수량 + 칼로리\n\n**잘못 계산됐다면** (내 식단만 고칠 수 있어요)\n음식 옆 **✏️** = 칼로리·영양소 숫자 수정\n음식 옆 **❌** = 잘못 들어간 항목 삭제\n\n✏️ 가 안 보이면 톡방에서\n**\"코가야 내 링크\"** → 받은 주소를 한 번 열기\n(그 뒤로는 홈 내 카드에도 ✏️ 가 보여요)\n\n맨 아래 **\"상세 영양소 보기\"** 버튼\n→ 멤버 전용 상세 페이지로 이동\n→ 탄·단·지·나트륨 외에 당류/식이섬유/\n칼슘/철분/비타민 D·C/마그네슘/오메가3/아연\n**추가 9개 영양소**까지 확인 가능\n\n**📸 식단 이미지 저장** 버튼으로\n그날 전체 멤버 식단을 **PNG로 다운로드**\n해서 단톡방에 자랑할 수도 있어요.",
        highlight: "카드 탭 → 식사 목록 · ✏️ 수정 · 상세 영양소 · PNG 저장",
      },
      {
        id: "use-l3",
        title: "② 리포트 — 일간 · 주간",
        content:
          "리포트 탭에는 **일간 / 주간**\n2개의 서브탭이 있어요.\n\n**📅 일간 탭**\n그날 전체 멤버를 표로 한 번에\n**\"이미지 복사\" / \"이미지 저장\"** 버튼으로\n단톡방에 바로 공유 가능\n\n**📊 주간 탭**\n멤버별 월~일 **7칸 상태 표시**\n· **O** 달성\n· **!** 미달성 (기록이 없는 날 포함)\n· **P** 특별일 · 개인 사유로 통과(pass)\n· **-** 아직 판정하지 않는 날\n(오늘 날짜는 초록 테두리 강조)",
        highlight: "일간=표+이미지공유 / 주간=O ! P -",
      },
      {
        id: "use-l3b",
        title: "② 리포트 — 주간 카드 탭해서 더 보기",
        content:
          "주간 탭 카드 오른쪽 위에는\n**이번 주 달성 일수**가 보여요.\n예: 5/7 달성\n\n**멤버 카드를 탭**하면\n**요일별 세부 기록**이 펼쳐져요.\n· 그날 칼로리\n· 단백질 (목표 있는 멤버)\n\n판정한 날을 모두 달성한 주엔\n**\"이번 주 완벽 달성!\"**\n초록 배너가 떠요. 🎉",
        highlight: "카드 탭 → 요일별 칼로리·단백질",
      },
      {
        id: "use-l4",
        title: "③ 음식 — 영양소 DB 조회",
        content:
          "**2,000개가 넘는 음식**의 영양소가\n저장돼 있어요.\n\n**🔍 검색** — 음식 이름으로 찾기\n예: \"삼겹살\", \"신라면\"\n\n**카테고리** (가로 스크롤)\n밥·곡류 / 고기 / 면류 / 국·찌개 /\n외식 / 편의점 / 반찬 / 분식 / 간식 등\n\n**카드 기본**: 이름 · 제공량 · 탄·단·지 · kcal\n\n**카드를 탭하면** 더 자세한 영양소가 보여요.\n\n자주 먹는 건 **★ 즐겨찾기** → 상단 고정",
        highlight: "이름 검색 · 카테고리 · 카드 탭 → 상세 · ★ 즐겨찾기",
        image: {
          src: "/guide/03-foods.png",
          alt: "식단하조 음식 영양소 DB 화면 — 검색과 카테고리 필터",
          caption: "음식 탭: 내가 먹은 음식의 영양소를 바로 조회",
        },
      },
      {
        id: "use-l5",
        title: "④ 목표 — 계산기 & 개인 목표",
        content:
          "맨 위에 **🧮 계산기 바로가기** 카드 2개\n· **칼로리 계산기** — 내 목표 칼로리 계산\n· **BMR 계산기** — 기초대사량 계산\n(탭하면 계산기 페이지로 이동)\n\n그 아래는 **멤버별 개인 목표**\n예시) 단백질 50g 이상 · 간식 1회 이하 /\n2000kcal 이상 · 단백질 100g 이상\n\n이 목표로 홈의 **달성/미달성**과\n주간 리포트의 **O / !** 가 정해져요.\n\n목표 탭은 **보기만** 해요.\n내 목표는 톡방에서 **코가에게** 보내서 정하고 바꿔요.\n예) 코가야 목표 1500~1800kcal 단백질 100g\n(자세히는 가이드의 **나만의 목표 정하기**)",
        highlight: "🧮 계산기 바로가기 · 멤버별 목표 (설정은 코가에게)",
      },
      {
        id: "use-l6",
        title: "🧮 보너스 — 계산기 2개",
        content:
          "**목표 탭** 상단에 있는\n**칼로리 계산기 / BMR 계산기** 버튼을\n탭하면 바로 쓸 수 있어요.\n\n**칼로리 계산기**\n4단계 스텝 UI\n성별 → 나이·키·몸무게 → 활동량 → 목표\n결과: 하루 권장 kcal + 탄·단·지 그램 + 비율\n\n**BMR 계산기**\n한 화면 입력 (해리스-베네딕트 공식)\n성별·나이·키·몸무게\n결과: BMR + 활동량별 TDEE\n+ 다이어트 목표별 권장 칼로리\n\n계산기 페이지 상단의\n**\"칼로리 추천 / 기초대사량\"** 탭으로\n두 계산기 사이를 자유롭게 이동할 수 있어요.",
        highlight: "목표 탭 → 칼로리 계산기 / BMR 계산기 버튼 탭",
        image: {
          src: "/guide/05-calculator.png",
          alt: "칼로리 추천 계산기 — 4단계 스텝 UI",
          caption: "계산기: 하루 권장 칼로리 & BMR 직접 계산",
        },
      },
      {
        id: "use-l9",
        title: "🌙 매일 밤 10시 정산 & 코가",
        content:
          "매일 **밤 10시**에 코가(봇)가\n그날 기록을 정리해서 톡방에 올려요.\n\n· 기록한 사람 — 칼로리 · 탄·단·지\n· 아직 기록 안 한 사람 명단\n\n**일요일 밤 9시**엔 한 주를 돌아보는\n**주간 시상식** 🏆\n\n톡방에서 **\"코가야 도움말\"** 이라고\n부르면 코가가 할 수 있는 일을 알려줘요.\n예) 코가야 내 칼로리 / 코가야 평가",
        highlight: "밤 10시 정산 · 일요일 시상식 · 코가야 도움말",
      },
      {
        id: "use-l8",
        title: "하루 사용 흐름 정리",
        content:
          "실제로 하루는 이렇게 흘러갑니다.\n\n**🌅 아침/점심/저녁**\n카톡방에 먹은 음식을 **+ 로 시작해서 기록**\n→ 30분 안에 자동 계산 + 사이트 반영\n\n**🔍 궁금할 때**\n**음식 탭**에서 영양소 조회\n**계산기**로 내 목표 칼로리 계산\n\n**🌙 밤 10시**\n톡방에 올라온 **정산** 확인\n이상하면 **\"코가야 내 링크\"** 로 받은 내 페이지나\n**홈**의 내 카드에서 ✏️ 로 수정\n\n**📅 일요일 밤**\n**리포트 주간**에서 이번 주 달성 상태 확인\n\n**📸 자랑하고 싶을 때**\n홈/일간 리포트 → 이미지 저장/복사 → 단톡방",
        highlight: "카톡에 + 로 기록 → 자동 반영 / 이상하면 ✏️",
      },
    ],
    questions: [
      {
        id: "use-q1",
        type: "multiple-choice",
        question: "식단하조 사이트 하단의 4개 탭이 아닌 것은?",
        options: [
          { id: "a", text: "홈" },
          { id: "b", text: "리포트" },
          { id: "c", text: "채팅" },
          { id: "d", text: "목표" },
        ],
        correctAnswer: "c",
        explanation: "탭은 홈, 리포트, 음식, 목표 4개예요. 채팅은 없습니다.",
      },
      {
        id: "use-q-plus",
        type: "multiple-choice",
        question: "다음 중 식단으로 기록되는 카톡 글은?",
        options: [
          { id: "a", text: "김밥 1줄 먹었어요" },
          { id: "b", text: "+김밥 1줄, 라면 200g" },
          { id: "c", text: "점심 — 김밥 1줄" },
          { id: "d", text: "#김밥 1줄" },
        ],
        correctAnswer: "b",
        explanation: "+ 로 시작하는 글만 식단으로 기록돼요. + 가 없으면 그냥 대화로 봅니다.",
      },
      {
        id: "use-q6",
        type: "ox",
        question: "식단 기록을 사이트에 직접 입력해야 한다.",
        correctAnswer: false,
        explanation: "카톡방에 + 로 올리면 사이트에 자동 반영됩니다. 사이트 직접 입력은 필요 없어요.",
      },
      {
        id: "use-q-interval",
        type: "multiple-choice",
        question: "카톡에 올린 식단은 언제 사이트에 반영되나요?",
        options: [
          { id: "a", text: "조장이 직접 입력해 줄 때" },
          { id: "b", text: "30분마다 자동으로" },
          { id: "c", text: "하루 한 번, 밤 10시에만" },
          { id: "d", text: "일요일에 한꺼번에" },
        ],
        correctAnswer: "b",
        explanation: "30분마다 자동으로 읽어서 반영해요. 새벽 2~8시는 쉬고, 그 사이 올린 글은 아침에 반영됩니다.",
      },
      {
        id: "use-q-day",
        type: "multiple-choice",
        question: "밤 12시 30분(0시 30분)에 올린 야식은 어느 날 기록으로 들어갈까요?",
        options: [
          { id: "a", text: "전날 기록" },
          { id: "b", text: "새 날짜(오늘) 기록" },
          { id: "c", text: "기록되지 않는다" },
          { id: "d", text: "조장이 정한다" },
        ],
        correctAnswer: "a",
        explanation: "하루의 기준은 새벽 2시예요. 자정을 넘겨도 새벽 2시 전이면 전날 기록입니다.",
      },
      {
        id: "use-q14",
        type: "multiple-choice",
        question: "끼니(아침·점심·저녁·간식)는 어떻게 정해지나요?",
        options: [
          { id: "a", text: "매번 수동으로 선택" },
          { id: "b", text: "올린 시간대로 자동 분류 (05~10 아침 / 10~15 점심 / 15~21 저녁 / 그 외 간식)" },
          { id: "c", text: "아침/점심/저녁이 한 번씩 순서대로" },
          { id: "d", text: "조장이 수동 분류" },
        ],
        correctAnswer: "b",
        explanation:
          "글을 올린 시간대로 자동 분류되며, 글에 '아침/점심/저녁/간식' 단어가 있으면 그 단어가 우선 적용됩니다.",
      },
      {
        id: "use-q8",
        type: "multiple-choice",
        question: "홈 탭에서 다른 날짜의 기록을 보려면?",
        options: [
          { id: "a", text: "리포트 탭으로 이동해서 확인" },
          { id: "b", text: "상단 날짜 옆 좌/우 화살표로 이동" },
          { id: "c", text: "달력 아이콘을 길게 눌러 선택" },
          { id: "d", text: "불가능 — 오늘만 볼 수 있음" },
        ],
        correctAnswer: "b",
        explanation: "홈 상단 날짜 좌우 화살표로 다른 날짜를 볼 수 있어요. 가운데 날짜를 누르면 오늘로 돌아옵니다.",
      },
      {
        id: "use-q9",
        type: "multiple-choice",
        question: "홈에서 멤버 카드를 탭하면 무엇이 보이나요?",
        options: [
          { id: "a", text: "멤버의 전화번호" },
          { id: "b", text: "식사별(아침/점심/저녁/간식) 목록 + 상세 영양소 보기 버튼" },
          { id: "c", text: "멤버 삭제 버튼" },
          { id: "d", text: "아무 변화 없음" },
        ],
        correctAnswer: "b",
        explanation:
          "카드 탭 시 식사별 목록이 펼쳐지고, 맨 아래 '상세 영양소 보기'로 멤버 상세 페이지로 이동합니다.",
      },
      {
        id: "use-q7",
        type: "multiple-choice",
        question: "내 식단의 칼로리가 잘못 계산됐을 때 고치는 방법은?",
        options: [
          { id: "a", text: "고칠 방법이 없다" },
          { id: "b", text: "\"코가야 내 링크\"로 받은 내 페이지를 열고 음식 옆 ✏️ 를 눌러 수정한다" },
          { id: "c", text: "사이트를 새로고침하면 고쳐진다" },
          { id: "d", text: "일요일까지 기다린다" },
        ],
        correctAnswer: "b",
        explanation: "톡방에서 \"코가야 내 링크\"라고 하면 내 페이지 주소를 알려줘요. 한 번 열어 두면 홈의 내 카드에도 음식마다 ✏️(수정)와 ❌(삭제)가 보여요. 다른 사람 식단은 고칠 수 없어요.",
      },
      {
        id: "use-q3",
        type: "multiple-choice",
        question: "주간 리포트의 'O' 표시가 의미하는 것은?",
        options: [
          { id: "a", text: "특별일" },
          { id: "b", text: "아직 판정하지 않는 날" },
          { id: "c", text: "목표 달성" },
          { id: "d", text: "미달성" },
        ],
        correctAnswer: "c",
        explanation: "O는 목표 달성, !는 미달성(기록 없는 날 포함), P는 특별일(pass), -는 아직 판정하지 않는 날이에요.",
      },
      {
        id: "use-q3b",
        type: "multiple-choice",
        question: "주간 리포트의 'P' 표시가 의미하는 것은?",
        options: [
          { id: "a", text: "점수(Point)" },
          { id: "b", text: "특별일 — 자동 통과(pass)" },
          { id: "c", text: "단백질(Protein) 달성" },
          { id: "d", text: "모임 대기(Pending)" },
        ],
        correctAnswer: "b",
        explanation: "P는 통과(pass) — 조장이 지정한 특별일이나 개인 사유가 있는 날이라 달성으로 쳐요.",
      },
      {
        id: "use-q5",
        type: "ox",
        question: "목표 탭에서 내 목표를 직접 수정할 수 있다.",
        correctAnswer: false,
        explanation: "목표 탭은 보기만 해요. 내 목표는 톡방에서 '코가야 목표 …'로 코가에게 보내서 정하고 바꿔요.",
      },
      {
        id: "use-q12",
        type: "multiple-choice",
        question: "칼로리/BMR 계산기에 어떻게 진입하나요?",
        options: [
          { id: "a", text: "관리자 페이지 → 계산기 메뉴" },
          { id: "b", text: "목표 탭 상단의 '칼로리 계산기 / BMR 계산기' 버튼 탭" },
          { id: "c", text: "홈 화면 우상단 톱니바퀴" },
          { id: "d", text: "음식 탭 검색창에 '계산기' 입력" },
        ],
        correctAnswer: "b",
        explanation:
          "목표 탭 상단에 '칼로리 계산기 / BMR 계산기' 버튼 2개가 있어요. 탭하면 바로 이동합니다.",
      },
      {
        id: "use-q13",
        type: "ox",
        question: "지난 기수의 기록은 사이트에서 더 이상 볼 수 없다.",
        correctAnswer: false,
        explanation: "오른쪽 위 기수 선택에서 '이전 기수'를 고르면 지난 기록을 볼 수 있어요. 처음 열면 항상 이번 기수입니다.",
      },
      {
        id: "use-q-recap",
        type: "multiple-choice",
        question: "코가가 그날 식단을 정리해서 톡방에 올려주는 시각은?",
        options: [
          { id: "a", text: "매일 아침 8시" },
          { id: "b", text: "매일 밤 10시" },
          { id: "c", text: "일요일 밤에만" },
          { id: "d", text: "글을 올릴 때마다" },
        ],
        correctAnswer: "b",
        explanation: "매일 밤 10시에 기록한 사람의 칼로리·탄단지와 아직 기록 안 한 사람을 정리해서 올려요.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 5, title: "사이트 입문", description: "한번 더 둘러봐요!" },
      { minScore: 6, maxScore: 11, title: "사이트 활용러", description: "거의 다 파악했어요!" },
      { minScore: 12, maxScore: 15, title: "사이트 마스터", description: "숨은 기능까지 완벽!" },
    ],
  },
  {
    // 내용은 18기 첫 오프라인 모임(4/5) 발표 Part 1 '목표 설정 가이드'를 옮긴 것.
    // 끝나면 톡방에서 "코가야 목표 …"로 저장한다 — 형식은 식단하조 저장소 scripts/mention_handler.py 의 parse_goal.
    slug: "식단하조-목표설정",
    title: "식단하조 나만의 목표 정하기",
    description:
      "오프라인 모임에서 하던\n목표 설정 설명과 각자 목표를 정하는 시간을\n이번에는 이 퀴즈로 대신해요.\n\n설명 읽고 → 퀴즈 풀고 →\n톡방에서 코가에게 내 목표를 보내면 끝!",
    logo: "/logo-식단하조.png",
    theme: "식단하조",
    lessons: [
      {
        id: "goal-l1",
        title: "이제 목표를 정할 차례",
        content:
          "식단하조는 3단계로 진행해요.\n\n**01. 첫 한 주** — 관찰\n**02. 2주차** — 나만의 목표 설정\n**03. 3주차~** — 매일 기록 & 실천\n\n원래 **오프라인 모임**에서 하던\n**목표 설정 설명 + 각자 목표 정하는 시간**을\n이번에는 **이 퀴즈로 대신**해요.\n모임에서 따로 설명하지 않아요.\n\n설명 읽고 → 퀴즈 풀고 →\n**톡방에서 코가에게 내 목표 보내기**\n여기까지 하면 끝이에요.",
        highlight: "오프라인 모임의 목표 설정 시간 → 이 퀴즈로 대신",
      },
      {
        id: "goal-why",
        title: "왜 목표를 정하나요",
        content:
          "기록만 하면 **'얼마나 먹었나'**만 알 수 있어요.\n목표가 있어야 **'잘 먹었나'**를 알 수 있어요.\n\n'덜 먹자' 같은 막연한 다짐보다\n**숫자로 정한 목표**가 매일 지키기 쉬워요.\n\n정한 목표로 사이트가 매일 알려줘요.\n· 홈 — 내 카드의 **달성 / 미달성**\n· 리포트 주간 — 요일별 **O / !**\n\n목표가 없으면 판정할 게 없어서\n기록만 해도 O가 찍혀요.",
        highlight: "목표가 있어야 '잘 먹었나'를 매일 점검할 수 있어요",
      },
      {
        id: "goal-eat",
        title: "왜 '잘' 먹어야 하나요",
        content:
          "다이어트는 **굶기가 아니에요.**\n너무 적게 먹으면 몸은 이렇게 반응해요.\n\n1. **기초대사량 저하** — 절약 모드로, 잘 안 빠져요\n2. **근손실** — 근육을 분해해 에너지로 써요\n3. **식욕 호르몬 변화** — 폭식 충동이 커질 수 있어요\n4. **영양 결핍 · 피로** — 철분 · 칼슘 부족, 잦은 감기\n5. **요요** — 극단적 제한 → 폭식 → 체중 반등\n\n그래서 목표는 **'적게'가 아니라 '알맞게'** 정해요.\n\n🚫 하루 **여 1,200kcal · 남 1,500kcal 미만**은\n전문가 지도 없이 목표로 잡지 않아요.\n(1,200kcal 미만은 코가도 저장하지 않아요)",
        highlight: "목표는 '적게'가 아니라 '알맞게' — 여 1,200 · 남 1,500kcal 미만은 금지",
      },
      {
        id: "goal-kcal",
        title: "칼로리 목표는 이렇게 정해요",
        content:
          "기준은 **내 몸이 하루에 쓰는 에너지(TDEE)**예요.\n(기초대사량 × 활동량 — 계산은 계산기가 해 줘요)\n\n· 체중 유지 — **TDEE만큼**\n· 감량 — **TDEE의 85~90%** (완만한 감량)\n  주 0.2~0.3kg 정도로 천천히 빠져요\n\n천천히 빼야 **근육을 지키고 요요가 적어요.**\n\n**TDEE의 80% 밑으로는 내리지 않아요.**\n예) TDEE 2,000kcal → 목표 1,700~1,800kcal\n     (아무리 줄여도 1,600kcal까지)",
        highlight: "TDEE의 85~90% · 80% 밑으로는 내리지 않기",
      },
      {
        id: "goal-protein",
        title: "단백질 목표 — 왜, 얼마나",
        content:
          "**왜?** 칼로리를 줄이는 동안\n단백질이 **근육을 지키고 포만감**을 줘요.\n근육이 남아야 대사가 덜 떨어져요.\n\n**얼마나?** 체중 1kg당\n· 처음이라면 — **1.0g**\n· 근력 운동을 한다면 — **1.6g 이상**\n  (다이어트 중이면 1.6~2.4g)\n\n예) 60kg → 60g / 70kg · 근력 운동 → 112g\n\n끼니를 나누는 것보다 **하루 총량**을 채우는 게 먼저예요.",
        highlight: "근육 · 포만감 지키기 — 체중×1.0g, 근력 운동하면 ×1.6g 이상",
      },
      {
        id: "goal-l9",
        title: "내게 필요한 목표 고르기",
        content:
          "목표를 정하기 전에\n**지금 내가 어떻게 먹는지**부터 봐요.\n\n사이트 **홈**에서 ◀ 로 지난 날짜를 넘기며\n내 카드의 **칼로리 · 단백질**을 확인하세요.\n\n· 많이 먹는다 → **칼로리 상한** (1800kcal 이하)\n· 너무 적게 먹는다 → **칼로리 하한** (1500kcal 이상)\n· 단백질이 모자란다 → **단백질** (100g 이상)\n· 간식이 잦다 → **간식 횟수** (간식 1회 이하)\n\n'한 달에 5kg 감량'처럼 하루 단위로\n잴 수 없는 건 목표로 넣을 수 없어요.\n처음엔 **칼로리 하나 + 단백질 하나**면 충분해요.",
        highlight: "첫 주 기록을 보고 → 칼로리 · 단백질 · 간식 중에서 고르기",
      },
      {
        id: "goal-l10b",
        title: "🧮 내 숫자 1분 만에 정하기",
        content:
          "계산이 어렵다면 이렇게만 하세요.\n\n**① 칼로리**\n사이트 **목표 탭 → BMR 계산기**에\n성별 · 나이 · 키 · 몸무게를 넣고 **계산하기**\n→ 결과 화면에서 **내 활동량을 꼭 탭**해요\n(안 누르면 '좌식 생활' 기준이에요)\n아래 **'다이어트 목표별 칼로리'**에서\n**완만한 감량** 줄 숫자를 그대로 써요.\n(체중 유지가 목표면 **체중 유지** 숫자 이하)\n\n**② 단백질**\n**체중 × 1.0g** (근력 운동을 하면 × 1.6g)\n\n예) 완만한 감량 1,700 ~ 1,800 · 체중 60kg\n→ **코가야 목표 1700~1800kcal 단백질 60g**",
        highlight: "BMR 계산기 '완만한 감량' 숫자 + 체중 × 1.0g",
      },
      {
        id: "goal-l11",
        title: "🎯 코가에게 목표 보내기",
        content:
          "정했으면 **톡방에서 코가에게** 보내요.\n\n**코가야 목표 1500~1800kcal 단백질 100g**\n\n다른 예)\n· 코가야 목표 1800kcal 이하 단백질 80g\n· 코가야 목표 2000kcal 이상 단백질 120g\n· 코가야 목표 1600kcal 이하 간식 1회\n\n칼로리는 **범위**나 **이하 / 이상**을 꼭 붙여요.\n(그냥 '1800kcal'은 저장되지 않아요)\n\n**코가야 내 목표** — 저장된 목표 확인\n바꾸려면 **다시 보내면 통째로 바뀌어요.**\n(안 적은 칸은 비워져요)",
        highlight: "코가야 목표 1500~1800kcal 단백질 100g",
      },
    ],
    questions: [
      {
        id: "goal-q1",
        type: "multiple-choice",
        question: "목표를 정하는 가장 큰 이유는?",
        options: [
          { id: "a", text: "다른 멤버와 칼로리 경쟁을 하려고" },
          { id: "b", text: "매일 내 식사가 잘 됐는지 점검하려고" },
          { id: "c", text: "기록을 덜 하려고" },
          { id: "d", text: "사이트에 이름을 올리려고" },
        ],
        correctAnswer: "b",
        explanation: "기록만 하면 '얼마나 먹었나'만 알아요. 목표가 있어야 매일 '잘 먹었나'를 달성 / 미달성으로 점검할 수 있어요.",
      },
      {
        id: "goal-q2",
        type: "ox",
        question: "빨리 빼려면 하루 1,000kcal 아래로 먹는 게 좋다.",
        correctAnswer: false,
        explanation: "너무 적게 먹으면 대사가 떨어지고 근육이 빠져 요요가 와요. 여 1,200kcal · 남 1,500kcal 미만은 목표로 잡지 않아요.",
      },
      {
        id: "goal-q3",
        type: "multiple-choice",
        question: "너무 적게 먹을 때 생기는 일이 아닌 것은?",
        options: [
          { id: "a", text: "기초대사량이 떨어진다" },
          { id: "b", text: "근육이 빠진다" },
          { id: "c", text: "요요가 오기 쉽다" },
          { id: "d", text: "근육이 빨리 늘어난다" },
        ],
        correctAnswer: "d",
        explanation: "너무 적게 먹으면 몸이 절약 모드로 바뀌고 근육을 에너지로 써요. 근육은 오히려 줄어요.",
      },
      {
        id: "goal-q4",
        type: "multiple-choice",
        question: "대부분의 사람에게 추천하는 감량 목표는?",
        options: [
          { id: "a", text: "TDEE의 85~90% — 천천히 빼기" },
          { id: "b", text: "TDEE의 60~70% — 최대한 빨리 빼기" },
          { id: "c", text: "하루 한 끼만 먹기" },
          { id: "d", text: "주말에 몰아서 굶기" },
        ],
        correctAnswer: "a",
        explanation: "천천히(주 0.2~0.3kg 정도) 빼야 근육을 지키고 요요가 적어요.",
      },
      {
        id: "goal-q5",
        type: "multiple-choice",
        question: "TDEE가 2,000kcal인 사람이 감량할 때, 하루 최소 몇 kcal는 먹어야 할까요?",
        options: [
          { id: "a", text: "1,000kcal" },
          { id: "b", text: "1,200kcal" },
          { id: "c", text: "1,600kcal" },
          { id: "d", text: "2,000kcal" },
        ],
        correctAnswer: "c",
        explanation: "TDEE의 80% 밑으로는 내리지 않아요. 2,000 × 0.8 = 1,600kcal.",
      },
      {
        id: "goal-q6",
        type: "multiple-choice",
        question: "다이어트 중에 단백질 목표를 정하는 이유로 맞는 것은?",
        options: [
          { id: "a", text: "근육을 지키고 포만감을 줘서" },
          { id: "b", text: "칼로리가 없어서" },
          { id: "c", text: "많이 먹을수록 살이 빠져서" },
          { id: "d", text: "물을 덜 마셔도 돼서" },
        ],
        correctAnswer: "a",
        explanation: "칼로리를 줄이는 동안 단백질이 근육을 지키고 배고픔을 덜어 줘요.",
      },
      {
        id: "goal-q7",
        type: "multiple-choice",
        question: "체중 70kg인 사람이 다이어트하면서 근력 운동을 한다면, 단백질 목표는 하루 최소 얼마?",
        options: [
          { id: "a", text: "56g" },
          { id: "b", text: "70g" },
          { id: "c", text: "112g" },
          { id: "d", text: "200g" },
        ],
        correctAnswer: "c",
        explanation: "근력 운동을 한다면 체중 1kg당 1.6g 이상 — 70 × 1.6 = 112g이에요.",
      },
      {
        id: "goal-q8",
        type: "multiple-choice",
        question: "사이트에 목표로 넣을 수 없는 것은?",
        options: [
          { id: "a", text: "1800kcal 이하" },
          { id: "b", text: "단백질 100g 이상" },
          { id: "c", text: "간식 1회 이하" },
          { id: "d", text: "한 달에 5kg 감량" },
        ],
        correctAnswer: "d",
        explanation: "목표는 매일 판정할 수 있는 칼로리 · 단백질 · 간식 횟수만 넣을 수 있어요.",
      },
      {
        id: "goal-q9",
        type: "multiple-choice",
        question: "톡방에서 내 목표를 저장하는 말로 맞는 것은?",
        options: [
          { id: "a", text: "+목표 1500~1800kcal" },
          { id: "b", text: "코가야 목표 1500~1800kcal 단백질 100g" },
          { id: "c", text: "코가야 목표 1800kcal" },
          { id: "d", text: "목표 1800kcal 이하" },
        ],
        correctAnswer: "b",
        explanation:
          "'코가야'로 불러야 하고, 칼로리는 범위나 이하 / 이상을 붙여야 저장돼요. + 로 시작하면 식단 기록으로 읽혀요.",
      },
      {
        id: "goal-q10",
        type: "ox",
        question: "한 번 정한 목표는 조장에게 말해야만 바꿀 수 있다.",
        correctAnswer: false,
        explanation: "코가에게 새 목표를 다시 보내면 통째로 바뀌어요. '코가야 내 목표'로 확인할 수 있어요.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 4, title: "목표 초보", description: "설명을 한 번 더 보고 와요" },
      { minScore: 5, maxScore: 8, title: "목표 중수", description: "조금만 더!" },
      { minScore: 9, maxScore: 10, title: "목표 마스터", description: "이제 코가에게 목표를 보내 주세요!" },
    ],
    resultNote:
      "이제 **톡방에서 코가에게** 내 목표를 보내 주세요.\n\n**코가야 목표 1500~1800kcal 단백질 100g**\n\n숫자는 **BMR 계산기의 '완만한 감량'** 줄과\n**체중 × 1.0g**으로 바꿔서 보내고,\n**코가야 내 목표**로 저장됐는지 확인하세요.",
    resultLink: { href: "https://sikdan-hajo.vercel.app/bmr", label: "BMR 계산기 열기" },
  },
  {
    slug: "AI써보조",
    title: "AI 써보조 조모임 상세 설명",
    description:
      "직접 써보고, 진짜 내 것으로 만들자.\n설명을 읽고 퀴즈로 확인해보세요.",
    logo: "",
    theme: "AI써보조",
    lessons: [
      {
        id: "ai-l1",
        title: "AI 써보조란?",
        content:
          "AI가 좋다고는 들었는데\n뭘 어떻게 쓰는 건지 모르겠다면,\n여기서 같이 써보면 됩니다.\n\n자신이 써보고 활용한\n**AI 활용법을 공유**하고,\n**직접 따라 해보는** 모임이에요.\n\n**써본 사람이 압도적으로 빨라집니다.**\n지금 시작해도 충분해요.",
        highlight: "AI 활용 + 실습 중심 + 꿀팁 공유",
      },
      {
        id: "ai-l2",
        title: "이런 도구를 써봅니다",
        content:
          "**Gemini** (Google)\n이미지/영상 만들기\n\n**Suno**\nAI 작곡 + 보컬, 음악 생성\n\n**Claude** (Anthropic)\n문서, 일정, PPT, 코딩까지\n\n**일레븐랩스 · 타입캐스트**\n텍스트 → 사람 같은 목소리\n\n+ **프롬프트**, **자동화**, **도구 조합** 꿀팁도\n함께 배우고 공유합니다.",
        highlight: "Gemini / Suno / Claude / 음성도구 + 꿀팁",
      },
      {
        id: "ai-l3",
        title: "활동 흐름 & 오프라인",
        content:
          "**4월 11일** 오프라인 1회로\nAI 써보조는 마무리됩니다.\n\n오프라인에서는\n주요 도구를 함께 세팅하고,\n간단한 결과물을 하나씩 만들어봅니다.\n\n**노트북 지참 필수**\n\n이후 관심 있는 분은\n**AI 배워보조**(계획 중)로 이어갈 수 있어요.\n첫 주제: Claude Code — 코딩 없이 AI에게 시키는 법",
        highlight: "4월 11일 오프라인 (노트북 필수)",
      },
    ],
    questions: [
      {
        id: "ai-q1",
        type: "multiple-choice",
        question: "AI 써보조의 핵심 키워드 3가지가 아닌 것은?",
        options: [
          { id: "a", text: "AI 활용" },
          { id: "b", text: "실습 중심" },
          { id: "c", text: "이론 강의" },
          { id: "d", text: "꿀팁 공유" },
        ],
        correctAnswer: "c",
        explanation: "AI 활용, 실습 중심, 꿀팁 공유가 핵심이에요.",
      },
      {
        id: "ai-q2",
        type: "multiple-choice",
        question: "이미지/영상을 만들 수 있는 AI 도구는?",
        options: [
          { id: "a", text: "Suno" },
          { id: "b", text: "Claude" },
          { id: "c", text: "Gemini" },
          { id: "d", text: "타입캐스트" },
        ],
        correctAnswer: "c",
        explanation: "Gemini는 Google의 이미지·영상 생성 AI입니다.",
      },
      {
        id: "ai-q3",
        type: "multiple-choice",
        question: "Claude를 만든 회사는?",
        options: [
          { id: "a", text: "Google" },
          { id: "b", text: "OpenAI" },
          { id: "c", text: "Anthropic" },
          { id: "d", text: "Meta" },
        ],
        correctAnswer: "c",
        explanation: "Claude는 Anthropic이 만든 AI입니다.",
      },
      {
        id: "ai-q4",
        type: "ox",
        question: "텍스트를 사람 같은 목소리로 읽어주는 도구는 일레븐랩스와 타입캐스트다.",
        correctAnswer: true,
        explanation: "일레븐랩스는 영어, 타입캐스트는 한국어에 강합니다.",
      },
      {
        id: "ai-q5",
        type: "ox",
        question: "AI 써보조 오프라인 모임에는 노트북을 꼭 가져가야 한다.",
        correctAnswer: true,
        explanation: "도구를 함께 세팅하고 실습하므로 노트북 지참 필수입니다.",
      },
      {
        id: "ai-q6",
        type: "multiple-choice",
        question: "AI 써보조 이후 더 깊이 배우고 싶으면?",
        options: [
          { id: "a", text: "AI 써보조 2기" },
          { id: "b", text: "AI 배워보조" },
          { id: "c", text: "AI 마스터조" },
          { id: "d", text: "AI 만들조" },
        ],
        correctAnswer: "b",
        explanation: "관심 있는 분은 AI 배워보조로 이어갑니다.",
      },
    ],
    results: [
      { minScore: 0, maxScore: 2, title: "AI 입문자", description: "함께 배워봐요!" },
      { minScore: 3, maxScore: 4, title: "AI 활용러", description: "더 깊이 파보아요!" },
      { minScore: 5, maxScore: 6, title: "AI 전문가", description: "AI 써보조의 핵심 멤버감!" },
    ],
  },
  {
    slug: "기초의학용어-중간고사",
    title: "기초의학용어 중간고사 문제풀이",
    description:
      "혈액·호흡·순환·비뇨·소화·근골격계 6개 챕터 핵심 정리 + 24문항.\n레슨을 먼저 읽고 퀴즈로 복습해보세요.",
    theme: "medical",
    lessons: [
      {
        id: "med-l1",
        title: "Ch.1 혈액과 면역",
        content:
          "혈액 = **혈장(55%)** + **혈구(45%)**\n혈구: 적혈구(RBC, erythrocyte) / 백혈구(WBC, leukocyte) / 혈소판(platelet, thrombocyte)\n\n**접미사 공식**\n· -penia : 감소 (erythropenia, leukopenia)\n· -cytosis : 증가 (leukocytosis)\n· pan- : 모두 → pancytopenia(범혈구감소증)\n\n**빈혈 종류**\n· iron deficiency anemia — 가장 흔함\n· pernicious anemia — Vit.B12/엽산 부족, 악성빈혈\n· sickle cell / thalassemia — 유전성\n· aplastic(재생불량) / hemolytic(용혈성)\n\n**지혈 3단계**\n혈관수축 → 혈소판마개 → 응고(fibrin)\n\n**면역**: 자연면역(innate) vs 획득면역(adaptive = 체액성 HI + 세포매개성 CMI)",
        highlight: "-penia(감소) / -cytosis(증가) / pan-(모두)",
      },
      {
        id: "med-l2",
        title: "Ch.2 호흡",
        content:
          "**해부 순서**\n코 → 비강 → 인두(pharynx) → 후두(larynx) → 기관(trachea) → 기관지(bronchus) → 폐(lung)\n\n**호흡 이상**\n· dyspnea 호흡곤란 / apnea 무호흡 / orthopnea 좌위호흡\n· bradypnea 느린호흡 / tachypnea 빠른호흡\n· Cheyne-Stokes(뇌손상 관련)\n\n**산소/이산화탄소 이상**\n· hyperoxia/hypoxia / hypercapnia/hypocapnia\n\n**폐암 2종**\n· 선암(adenocarcinoma) — 가장 흔함, 비흡연 여성\n· 편평상피세포암(squamous cell carcinoma) — 흡연 관련\n\n**폐쇄성 폐질환(COPD)**\n만성기관지염 + 폐기종(emphysema) — 가장 큰 원인 흡연\n\n**진폐증**: asbestosis(석면), silicosis(규폐), anthracosis(탄분)",
        highlight: "흡연 → 편평상피세포암 / COPD = chr.bronchitis + emphysema",
      },
      {
        id: "med-l3",
        title: "Ch.3 심장과 순환",
        content:
          "**혈류 경로**\nVena Cava → RA → RV → 폐동맥 → 폐(가스교환) → 폐정맥 → LA → LV → Aorta\n\n**판막**\n· tricuspid(삼첨판): RA↔RV\n· mitral=bicuspid(승모판): LA↔LV\n\n**허혈심장병(IHD)**\n= CAD 관상동맥질환\n· Angina Pectoris 협심증 → 치료: Nitroglycerin\n· Myocardial Infarction 심근경색 → 치료: CABG(복재정맥 saphenous v.) / PTCA\n\n**심전도(ECG)**\nP파(심방수축) - QRS군(심실수축) - T파(심실이완)\n\n**부정맥**\nbradycardia<60 / tachycardia>100 / flutter 250~350 / fibrillation>350\n\n**선천심장병 TOF (Tetralogy of Fallot)**\n① VSD ② 대동맥 우측편위 ③ PS ④ RVH → 청색증(blue baby)\n\n**혈압**\n고혈압(HT): Ps>140 or Pd>90 / 95%는 본태성(원인불명)",
        highlight: "MI 치료: CABG(복재정맥) / PTCA / TOF → 청색증",
      },
      {
        id: "med-l4",
        title: "Ch.4 비뇨",
        content:
          "**비뇨계**: Kidney(신장) → Ureter(요관) → Bladder(방광) → Urethra(요도)\n\n**Nephron** (신장 기능단위, 한쪽에 100만개)\n· 신소체: Glomerulus(사구체) + Bowman's capsule\n· 세뇨관: PT → LOH(헨레고리) → DT → CD(집합관)\n\n**신장 호르몬**\n· Erythropoietin — 적혈구 생성 자극\n· Calcitriol — Vit.D 활성형, Ca²⁺↑\n· Renin — 혈압조절(RAAS)\n· ADH(뇌하수체) 부족 → **Diabetes Insipidus(요붕증)**\n\n**소변검사 이상**\nhematuria(혈뇨) / pyuria(농뇨) / proteinuria(단백뇨) / ketonuria(케톤뇨)\n\n**BUN** ↑ → Azotemia → Uremia(요독증)\n\n**신증후군(Nephrotic syndrome)**\n단백뇨 → 저알부민혈증 → **부종(edema)**\n\n**수술 접미사**\n-ectomy(절제) / -otomy(절개) / -ostomy(창냄) / -plasty(성형) / -scopy(경검사)",
        highlight: "ADH 부족 → 요붕증 / 신증후군 → 단백뇨·저알부민·부종",
      },
      {
        id: "med-l5",
        title: "Ch.5 소화",
        content:
          "**위장관**\n입 → 인두 → 식도 → 위 → 소장(duodenum→jejunum→ileum) → 대장(cecum→colon→rectum→anus)\n\n**위(stomach) 4구역**\ncardia(분문) / fundus(바닥) / body(몸통) / pylorus(유문)\n\n**침샘 3종**\n· 이하선(parotid) — 가장 큼, Mumps(볼거리)\n· 설하선(sublingual)\n· 악하선(submandibular) — 가장 많이 분비\n\n**주요 질환**\n· PUD(소화성 궤양) = 위궤양 + 십이지장궤양 → melena(흑색변)\n· Crohn's disease — 회장(ileum) 말단 호발\n· Ulcerative colitis — 직장에서 시작\n· Hepatitis A = Infectious / B = Serum hepatitis\n\n**ANVDC 증상**\nAnorexia/Nausea/Vomiting(=emesis)/Diarrhea/Constipation\n\n**토혈 vs 각혈**\n· hematemesis — 소화기 출혈\n· hemoptysis — 호흡기 출혈\n\n**수술**\n· Whipple operation — 췌장암\n· Miles operation(APR) — 직장·항문암\n· Billroth I/II — 위절제",
        highlight: "Crohn's → 회장 / 궤양성대장염 → 직장 / hematemesis(위) vs hemoptysis(폐)",
      },
      {
        id: "med-l6",
        title: "Ch.6 근골격계",
        content:
          "**척추 26개**\n경추(7) + 흉추(12) + 요추(5) + 천추(1) + 미골(1)\n· C1 atlas / C2 axis / C7 vertebra prominens\n· 추간판탈출(HIVD) 호발: **L4/L5**\n\n**주요 뼈 동의어**\n· Sternum = Breastbone 흉골\n· Clavicle = Collar bone 쇄골\n· Patella = Knee cap 슬개골\n· Tibia = Shin bone 경골\n· Fibula = Calf bone 비골\n\n**뼈 세포**\n· Osteoblast(조골) / Osteocyte(골세포) / Osteoclast(파골)\n· **골다공증(Osteoporosis)**: Osteoclast 기능 > Osteoblast\n\n**골절(Fracture) 종류**\n· Colle's Fx — distal radius (손목)\n· Pott's Fx — 발목(비골/경골)\n· Greenstick Fx — 어린이 불완전 골절\n· Depressed Fx — 두개골 / Compression Fx — 척추\n\n**관절염**\n· RA(류마티스) — 자가면역\n· OA(osteoarthritis) = Degenerative arthritis 퇴행성\n· Pott's disease = Tuberculosis spondylitis 결핵척추염\n\n**대사성 골질환**\n· Scurvy(Vit.C↓) / Rickets(Vit.D↓) / Gout(요산↑) / Osteoporosis(에스트로겐↓)\n\n**종양 규칙**\n· **-sarcoma로 끝나면 악성** (osteosarcoma, chondrosarcoma)\n· Ewing's tumor, Chordoma, Multiple myeloma도 악성",
        highlight: "-sarcoma = 악성 / HIVD 호발 L4/L5 / 골다공증: Osteoclast > Osteoblast",
      },
    ],
    questions: [
      {
        id: "med-q1",
        type: "multiple-choice",
        question: "Ch.1 접미사 '-penia'가 뜻하는 것은?",
        options: [
          { id: "a", text: "증가" },
          { id: "b", text: "감소" },
          { id: "c", text: "염증" },
          { id: "d", text: "정지" },
        ],
        correctAnswer: "b",
        explanation: "-penia는 '감소'를 의미합니다. 예) leukopenia(백혈구 감소증).",
      },
      {
        id: "med-q2",
        type: "multiple-choice",
        question: "Ch.1 전 세계적으로 가장 흔한 빈혈은?",
        options: [
          { id: "a", text: "재생불량성 빈혈(aplastic anemia)" },
          { id: "b", text: "악성빈혈(pernicious anemia)" },
          { id: "c", text: "철결핍성 빈혈(iron deficiency anemia)" },
          { id: "d", text: "겸상적혈구 빈혈(sickle cell anemia)" },
        ],
        correctAnswer: "c",
        explanation: "철결핍성 빈혈이 가장 흔하며 전세계적으로 10억명 이상의 환자가 있습니다.",
      },
      {
        id: "med-q3",
        type: "ox",
        question: "Ch.1 혈청(serum)은 혈장에서 피브리노겐이 제거된 것이다.",
        correctAnswer: true,
        explanation: "plasma = serum + fibrinogen. 혈청은 응고된 후 얻어지므로 응고단백질(피브리노겐)이 없습니다.",
      },
      {
        id: "med-q4",
        type: "short-answer",
        question: "Ch.1 '모든 혈구세포의 감소'를 뜻하는 한 단어를 영어로 쓰세요.",
        correctAnswers: ["pancytopenia", "Pancytopenia", "PANCYTOPENIA"],
        explanation: "pan-(모두) + cyto-(세포) + -penia(감소) = pancytopenia.",
      },
      {
        id: "med-q5",
        type: "multiple-choice",
        question: "Ch.2 흡연과 가장 관계가 깊은 폐암 유형은?",
        options: [
          { id: "a", text: "선암(adenocarcinoma)" },
          { id: "b", text: "편평상피세포암(squamous cell carcinoma)" },
          { id: "c", text: "대세포암(large cell carcinoma)" },
          { id: "d", text: "소세포암(small cell carcinoma)" },
        ],
        correctAnswer: "b",
        explanation: "편평상피세포암은 흡연과 가장 관련이 깊으며 폐암의 약 30%를 차지합니다.",
      },
      {
        id: "med-q6",
        type: "multiple-choice",
        question: "Ch.2 'atelectasis'의 의미는?",
        options: [
          { id: "a", text: "기흉(collapsed lung)" },
          { id: "b", text: "무기폐(collapsed lung)" },
          { id: "c", text: "폐부종" },
          { id: "d", text: "폐경색" },
        ],
        correctAnswer: "b",
        explanation: "atelectasis = 무기폐 = collapsed lung. pneumothorax(기흉)와 헷갈리지 않도록 주의.",
      },
      {
        id: "med-q7",
        type: "ox",
        question: "Ch.2 DPT 백신은 디프테리아(diphtheria), 백일해(pertussis), 파상풍(tetanus) 예방 백신이다.",
        correctAnswer: true,
        explanation: "DPT = Diphtheria + Pertussis(whooping cough) + Tetanus.",
      },
      {
        id: "med-q8",
        type: "short-answer",
        question: "Ch.2 '혈액을 담고 있는 흉막강'을 의미하는 영어 용어는?",
        correctAnswers: ["hemothorax", "Hemothorax", "HEMOTHORAX"],
        explanation: "hemo-(피) + -thorax(가슴). 고름이면 pyothorax(=empyema), 공기면 pneumothorax.",
      },
      {
        id: "med-q9",
        type: "multiple-choice",
        question: "Ch.3 관상동맥우회술(CABG)에 가장 많이 사용되는 정맥은?",
        options: [
          { id: "a", text: "요골정맥(radial vein)" },
          { id: "b", text: "대복재정맥(saphenous vein)" },
          { id: "c", text: "대퇴정맥(femoral vein)" },
          { id: "d", text: "내경정맥(internal jugular vein)" },
        ],
        correctAnswer: "b",
        explanation: "CABG는 대복재정맥(saphenous vein) 또는 내흉동맥(internal thoracic artery)을 주로 사용합니다.",
      },
      {
        id: "med-q10",
        type: "multiple-choice",
        question: "Ch.3 Tetralogy of Fallot(TOF) 4징후가 아닌 것은?",
        options: [
          { id: "a", text: "VSD(심실중격결손)" },
          { id: "b", text: "대동맥 우측편위(overriding aorta)" },
          { id: "c", text: "폐동맥판 협착(PS)" },
          { id: "d", text: "좌심실비대(LVH)" },
        ],
        correctAnswer: "d",
        explanation: "TOF 4징후는 ① VSD ② 대동맥 우측편위 ③ PS ④ RVH(우심실비대)이며 청색증을 유발합니다.",
      },
      {
        id: "med-q11",
        type: "ox",
        question: "Ch.3 수축기 혈압 > 140 또는 이완기 혈압 > 90이면 고혈압(HT)으로 진단한다.",
        correctAnswer: true,
        explanation: "고혈압 정의: Ps > 140 or Pd > 90. 95%는 원인불명의 본태성 고혈압입니다.",
      },
      {
        id: "med-q12",
        type: "short-answer",
        question: "Ch.3 심방세동이나 심실세동 시 전기 충격을 주는 응급 의료기기의 약자는?",
        correctAnswers: ["AED", "aed"],
        explanation: "AED = Automated External Defibrillator(자동제세동기).",
      },
      {
        id: "med-q13",
        type: "multiple-choice",
        question: "Ch.4 신장의 구조적·기능적 단위는?",
        options: [
          { id: "a", text: "Glomerulus" },
          { id: "b", text: "Nephron" },
          { id: "c", text: "Bowman's capsule" },
          { id: "d", text: "Renal pelvis" },
        ],
        correctAnswer: "b",
        explanation: "Nephron(네프론)이 신장의 기능단위이며 한쪽 신장에 약 100만개가 있습니다.",
      },
      {
        id: "med-q14",
        type: "multiple-choice",
        question: "Ch.4 항이뇨호르몬(ADH) 부족으로 발생하는 질환은?",
        options: [
          { id: "a", text: "Diabetes Mellitus(당뇨병)" },
          { id: "b", text: "Diabetes Insipidus(요붕증)" },
          { id: "c", text: "Nephrotic syndrome(신증후군)" },
          { id: "d", text: "Uremia(요독증)" },
        ],
        correctAnswer: "b",
        explanation: "ADH 부족 → 수분 재흡수 안 됨 → 소변량 대폭 증가(3~20L/day) = 요붕증.",
      },
      {
        id: "med-q15",
        type: "ox",
        question: "Ch.4 신증후군(Nephrotic syndrome)의 특징은 단백뇨 → 저알부민혈증 → 부종(edema)이다.",
        correctAnswer: true,
        explanation: "Nephrotic syndrome: Proteinuria → hypoalbuminemia → Edema 순으로 진행됩니다.",
      },
      {
        id: "med-q16",
        type: "short-answer",
        question: "Ch.4 '혈중 요소질소' 수치로 신장기능 저하 시 증가하는 검사 항목의 약자는?",
        correctAnswers: ["BUN", "bun"],
        explanation: "BUN = Blood Urea Nitrogen. 신장기능 저하 시 증가합니다.",
      },
      {
        id: "med-q17",
        type: "multiple-choice",
        question: "Ch.5 Crohn's disease가 가장 잘 발생하는 부위는?",
        options: [
          { id: "a", text: "식도(esophagus)" },
          { id: "b", text: "위(stomach)" },
          { id: "c", text: "회장 말단(distal ileum)" },
          { id: "d", text: "직장(rectum)" },
        ],
        correctAnswer: "c",
        explanation: "Crohn's disease는 입~항문 어디서나 생길 수 있지만 회장(ileum) 말단에 가장 잘 생깁니다.",
      },
      {
        id: "med-q18",
        type: "multiple-choice",
        question: "Ch.5 hematemesis와 hemoptysis의 차이로 옳은 것은?",
        options: [
          { id: "a", text: "hematemesis는 호흡기 출혈, hemoptysis는 소화기 출혈" },
          { id: "b", text: "hematemesis는 소화기 출혈(토혈), hemoptysis는 호흡기 출혈(각혈)" },
          { id: "c", text: "둘 다 소화기 출혈을 의미한다" },
          { id: "d", text: "둘 다 동일한 용어이다" },
        ],
        correctAnswer: "b",
        explanation: "hematemesis = 소화기 출혈(토혈), hemoptysis = 호흡기 출혈(각혈).",
      },
      {
        id: "med-q19",
        type: "ox",
        question: "Ch.5 Mumps(볼거리)는 이하선(parotid gland)에 침입한 바이러스 감염이며 epidemic parotitis와 동의어이다.",
        correctAnswer: true,
        explanation: "Mumps = Epidemic parotitis(유행성 이하선염). 이하선에 침입한 바이러스 감염입니다.",
      },
      {
        id: "med-q20",
        type: "short-answer",
        question: "Ch.5 췌장암(특히 췌장 머리 부위)에 시행하는 수술명(사람 이름)은? (영어 2단어)",
        correctAnswers: ["Whipple operation", "whipple operation", "WHIPPLE OPERATION", "Whipple Operation"],
        explanation: "Whipple operation = Pancreaticoduodenectomy. 췌장 머리 부위 암에 시행합니다.",
      },
      {
        id: "med-q21",
        type: "multiple-choice",
        question: "Ch.6 손목 원위부(distal radius)에 발생하는 골절은?",
        options: [
          { id: "a", text: "Pott's Fx" },
          { id: "b", text: "Colle's Fx" },
          { id: "c", text: "Greenstick Fx" },
          { id: "d", text: "Compression Fx" },
        ],
        correctAnswer: "b",
        explanation: "Colle's Fx는 넘어지면서 손을 짚을 때 distal radius(요골 원위부)에 발생합니다.",
      },
      {
        id: "med-q22",
        type: "ox",
        question: "Ch.6 골다공증(Osteoporosis)은 파골세포(osteoclast)의 기능이 조골세포(osteoblast)보다 우세할 때 발생한다.",
        correctAnswer: true,
        explanation: "Osteoporosis: Osteoclast > Osteoblast 기능. 폐경 후 여성에게 흔합니다.",
      },
      {
        id: "med-q23",
        type: "multiple-choice",
        question: "Ch.6 다음 중 '악성(malignant)' 종양이 아닌 것은?",
        options: [
          { id: "a", text: "Osteosarcoma(골육종)" },
          { id: "b", text: "Chondrosarcoma(연골육종)" },
          { id: "c", text: "Osteochondroma(골연골종)" },
          { id: "d", text: "Ewing's sarcoma(유잉육종)" },
        ],
        correctAnswer: "c",
        explanation: "-sarcoma로 끝나면 악성, -oma(단순형)으로 끝나는 Osteochondroma는 양성 종양입니다.",
      },
      {
        id: "med-q24",
        type: "short-answer",
        question: "Ch.6 추간판탈출증(HIVD)이 가장 흔하게 발생하는 요추 부위는? (예: L1/L2 형식)",
        correctAnswers: ["L4/L5", "l4/l5", "L4/5", "l4/5"],
        explanation: "추간판탈출증 호발 순위: L4/L5 > L5/S1 > L3/L4.",
      },
    ],
    results: [
      {
        minScore: 0,
        maxScore: 8,
        title: "기초 다지기 단계",
        description: "레슨을 한 번 더 정독하고 어원(-penia, -itis, -ectomy 등)부터 익혀보세요.",
      },
      {
        minScore: 9,
        maxScore: 16,
        title: "중간고사 합격권",
        description: "핵심 개념은 잡혔어요. 각 챕터 '최종정리' 표로 마무리하면 고득점 가능!",
      },
      {
        minScore: 17,
        maxScore: 21,
        title: "상위권 진입",
        description: "어원·동의어·임상 연결까지 탄탄합니다. 헷갈린 문제만 복습하세요.",
      },
      {
        minScore: 22,
        maxScore: 24,
        title: "의학용어 마스터",
        description: "완벽합니다! 기말고사 범위도 같은 패턴으로 정복 가능해요.",
      },
    ],
  },
];

// 영문 별칭 → 퀴즈 slug. 카톡에서는 한글 주소가 링크로 끝까지 잡히지 않을 때가 있다 (허브의 /sikdan 과 같은 이유).
export const SLUG_ALIASES: Record<string, string> = {
  "sikdan-goal": "식단하조-목표설정",
};

export function getQuizBySlug(slug: string): Quiz | undefined {
  const decoded = decodeURIComponent(slug);
  const target = SLUG_ALIASES[decoded] ?? decoded;
  return quizzes.find((q) => q.slug === target);
}
