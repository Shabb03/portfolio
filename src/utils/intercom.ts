import Intercom from "@intercom/messenger-js-sdk";

export const initializeIntercom = (): void => {
    try {
        Intercom({
            app_id: "bevgctfp",
        })
    } catch (error) {
        console.error("Failed to initialize Intercom", error);
    }
};

export const updateIntercom = (settings: Record<string, any>): void => {
    try {
        Intercom({
            app_id: "bevgctfp",
            ...settings,
        })
    } catch (error) {
        console.error("Failed to update Intercom", error);
    }
};
