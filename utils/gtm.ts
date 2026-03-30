export const sendGTMEvent = (data: { event: string; [key: string]: any }) => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push(data);
  }
};
