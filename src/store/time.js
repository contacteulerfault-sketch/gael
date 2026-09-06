import { create } from "zustand";

const lastUtcSunday = (year, monthIndex) => {
  const date = new Date(Date.UTC(year, monthIndex + 1, 0));
  date.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return date;
};

const londonOffsetHours = (date) => {
  const year = date.getUTCFullYear();
  const bstStart = lastUtcSunday(year, 2);
  bstStart.setUTCHours(1, 0, 0, 0);
  const bstEnd = lastUtcSunday(year, 9);
  bstEnd.setUTCHours(1, 0, 0, 0);
  return date >= bstStart && date < bstEnd ? 1 : 0;
};

const toLondonUtc = (date = new Date()) =>
  new Date(date.getTime() + londonOffsetHours(date) * 60 * 60 * 1000);

export const getOwnerNow = (date = new Date()) => {
  const london = toLondonUtc(date);
  return new Date(
    london.getUTCFullYear(),
    london.getUTCMonth(),
    london.getUTCDate(),
    london.getUTCHours(),
    london.getUTCMinutes(),
    london.getUTCSeconds(),
  );
};

export const formatOwnerTime = (date = new Date()) => {
  const london = toLondonUtc(date);
  return `${String(london.getUTCHours()).padStart(2, "0")}:${String(
    london.getUTCMinutes(),
  ).padStart(2, "0")}`;
};

export const formatOwnerDate = (date = new Date()) => {
  const london = toLondonUtc(date);
  return new Date(
    Date.UTC(london.getUTCFullYear(), london.getUTCMonth(), london.getUTCDate(), 12, 0, 0),
  ).toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};

const useTimeStore = create((set) => {
  if (typeof window !== "undefined") {
    setInterval(() => {
      set({ time: getOwnerNow() });
    }, 1000);
  }

  return {
    time: getOwnerNow(),
  };
});

export default useTimeStore;
