# Security Specification for Univesp Quiz Master

## Data Invariants
1. A `Question` must have exactly 5 options (A, B, C, D, E).
2. A `UserResult` score cannot exceed the `totalQuestions`.
3. `userId` in `UserResult` must match the authenticated user.

## The Dirty Dozen Payloads (Rejection Targets)
1. Result with `score` > `totalQuestions`.
2. Result with `userId` not matching `request.auth.uid`.
3. Question with only 2 options.
4. Attempt to update a Question by a non-admin.
5. Attempt to delete another user's Result.
6. Attempt to list Results without being signed in.
7. Question with an extremely long text (Denial of Wallet).
8. Result with a negative score.
9. Attempt to change `userId` in an existing Result.
10. Attempt to change `timestamp` in an existing Result.
11. Attempt to inject a field into a Question.
12. Attempt to write to a non-existent collection.
