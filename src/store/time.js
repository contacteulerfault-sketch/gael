import { create } from "zustand";
import { OWNER_TIMEZONE } from "@constants";

const ownerParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: OWNER_TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => Number(parts.find((part) => part.type === type)?.value);
  return {
    year: get("year"),
    month: get("month") - 1,
    day: get("day"),
    hour: get("hour"),
    minute: get("minute"),
    second: get("second"),
  };
};

export const getOwnerNow = (date = new Date()) => {
  const { year, month, day, hour, minute, second } = ownerParts(date);
  return new Date(year, month, day, hour, minute, second);
};

export const formatOwnerTime = (date = new Date()) => {
  const { hour, minute } = ownerParts(date);
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

export const formatOwnerDate = (date = new Date()) => {
  const { year, month, day } = ownerParts(date);
  return new Date(Date.UTC(year, month, day, 12, 0, 0)).toLocaleDateString("en-GB", {
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
