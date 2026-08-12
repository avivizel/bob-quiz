/**
 * Example overlays for bob.html — attach `example` by term id.
 * Load after bob-terms.js.
 */
window.VIBE_EXAMPLES_BOB = {
  skill:
    ".bob/skills/pr-checklist/SKILL.md\n\n---\nname: pr-checklist\ndescription: Review Diff before PR using the team checklist\n---\n\n1. Read the Diff\n2. Check Scope and Secrets\n3. Ensure a relevant test exists\n4. Report findings by severity",

  bobignore:
    ".bobignore example:\n.env\n.env.*\n/secrets\n/node_modules\n/dist\n*.pem\n/coverage\n\nתוצאה:\nBob will not read .env through normal tools.",

  "gitignore-vs-bobignore":
    "Same .env file:\n.gitignore  → not committed to Git\n.bobignore → Bob cannot read it\n\nטעות נפוצה:\nOnly gitignore → secret is not committed, but may still enter Bob context.",

  "slash-commands":
    "Built-in:\n/init      → creates AGENTS.md\n/review    → reviews changes\n/create-pr → drafts PR description\n\nCustom:\n.bob/commands/secure-check.md → /secure-check",

  "literate-coding":
    "Inside UserCard.tsx:\n// Show user.name in h2 and user.email in a muted paragraph. Do not change props.\n\nAfter Generate:\n<h2>{user.name}</h2>\n<p className=\"text-muted\">{user.email}</p>\n\nNext:\nReview Inline Diff → Accept",

  "cmd-init":
    "In chat:\n/init\n\nTypical result:\n✓ AGENTS.md at project root\n✓ Mode context files under /.bob\n\nמתי שוב:\nAfter major folder changes, new stack, or team onboarding.",

  "cmd-review":
    "/review\n→ review local uncommitted changes\n\n/review main\n→ compare against main\n\n/review --issue-coverage\n→ validate against a GitHub Issue\n\nאחרי הממצאים:\nFix by severity, then Verification.",

  "cmd-create-pr":
    "Flow:\n1. Branch + small commits\n2. /review\n3. Green tests\n4. /create-pr\n5. Edit PR body (Criteria, risks, issue links)",

  "cmd-ask":
    "Before coding:\n/ask\nHow is discount calculated in this project? Do not edit files.\n\nAfter clarity:\n/plan or /code",

  "cmd-code":
    "/code\nAdd a null check in getUser inside UserService.ts only. Minimal Change. Do not edit README.\n\nAfter Diff:\n/review → tests",

  "cmd-plan":
    "/plan\nPlan CSV export for the orders table. Do not edit yet.\n\nApprove file list and risks → then Code.",

  "plan-first":
    "רע:\nJump straight to /code for full-module modernization\n\nטוב:\n1. /ask or /plan — map + steps\n2. Human approval of the plan\n3. /code for the first unit only",

  "minimal-change-bob":
    "Goal:\nReturn 404 when id is missing\n\nMinimal:\nif (!item) return res.status(404).json({ error: 'Not found' })\n\nNot Minimal:\n+ convert file to TypeScript\n+ rename across the module",

  "auto-approve":
    "Demo / isolated prototype:\nAuto-approve may be used carefully\n\nTeam code / secrets / prod-like:\nDisable Auto-approve for commands and Skills\n+ .bobignore + Trusted Folders + Review Diff",

  "secrets-bob":
    "רע:\nPrompt: here is key sk-live-..., connect it\n\nטוב:\nPAYMENT_API_KEY in .env\n+ gitignore + bobignore\n+ code: process.env.PAYMENT_API_KEY",

  "review-every-diff":
    "Before Accept check:\n□ Only files in Scope\n□ No Secrets\n□ No surprising deletions\n□ No whole-file reformat\n\nIf unclear:\n/ask about the suspicious lines",

  "anti-yolo":
    "YOLO:\nAuto-approve on main without Diff\n\nBetter:\nBranch → manual approvals → /review → PR",

  "anti-vague-prompt":
    "רע:\nImprove Bob in this project\n\nטוב:\nIn CheckoutPage.tsx fix VAT calculation per docs/tax.md. No UI changes. Criteria: calcVat unit test passes.",

  "anti-blind-accept":
    "Warning sign:\nAccept after a long session without reading Diff\n\nDo this:\nOpen Inline Diff / full Diff\nReject out-of-Scope changes\nOnly then Accept",

  "anti-token-max":
    "רע:\n12 full files + huge log dump\n\nטוב:\n@PaymentService.ts\n+ 30 log lines around the error\n+ one sentence: amount becomes NaN after discount",

  iterate:
    "Round 1:\nPlan for approval\n\nRound 2:\nMinimal Change + Diff\n\nRound 3:\nFix from failing test\n\nFeedback:\nKeep handler; revert CSS — out of Scope",

  "acceptance-first":
    "CSV feature:\n□ Export button above table\n□ All visible columns\n□ Headers match UI\n□ npm test green\n\nWrite Criteria before /code",

  "agents-md-from-init":
    "After /init open AGENTS.md and verify:\n□ Folder structure is correct\n□ build/test commands\n□ Missing team conventions — add manually\n\nCommit it for the team.",
};

(() => {
  const examples = window.VIBE_EXAMPLES_BOB || {};
  const terms = Array.isArray(window.VIBE_TERMS) ? window.VIBE_TERMS : [];
  terms.forEach((term) => {
    if (examples[term.id]) {
      term.example = examples[term.id];
    }
  });
})();
