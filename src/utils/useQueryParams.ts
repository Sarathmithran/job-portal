"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  const getParam = (key: string) => {
    return searchParams.get(key) || null;
  };

  return { getParam, setParam, searchParams };
}