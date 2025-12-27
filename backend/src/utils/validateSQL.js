export function validateSQL(query) {
    const forbidden = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER"];
    return !forbidden.some(word =>
        query.toUpperCase().includes(word)
    );
};