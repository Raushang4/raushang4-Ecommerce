/**
 * Safe error handling utility for Firebase / Firestore interactions.
 * Prevents raw errors from crashing the app or exposing sensitive backend state
 * to the user interface.
 */
export const handleFirestoreError = (error) => {
  console.error("Firestore Operation Failed:", error);

  // Return a safe, user-friendly error string based on generic codes
  if (error.code === 'permission-denied') {
    return 'You do not have permission to perform this action.';
  }
  if (error.code === 'unavailable') {
    return 'The service is currently unavailable. Please check your connection and try again.';
  }
  if (error.code === 'not-found') {
    return 'The requested resource could not be found.';
  }

  // Fallback safe message
  return 'An unexpected error occurred while communicating with the server. Please try again later.';
};

/**
 * Mock wrapper for future DB writes.
 * @param {Function} dbAction The async function containing the actual DB logic
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export const safeDbWrite = async (dbAction) => {
  try {
    const result = await dbAction();
    return { success: true, data: result };
  } catch (err) {
    const safeErrorMsg = handleFirestoreError(err);
    return { success: false, error: safeErrorMsg };
  }
};
