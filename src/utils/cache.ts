class LocalCache {
  setCache(key: string, value: any) {
    if (typeof value === "undefined") throw new Error("JSON不能为undefined");
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) return JSON.parse(value);
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}

export const localCache = new LocalCache();
