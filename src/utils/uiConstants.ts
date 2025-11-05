import uiConstantsData from "../data/uiConstants.json";

export const UI_TEXT = uiConstantsData.UI_TEXT;
export const ANIMATION_DELAYS = uiConstantsData.ANIMATION_DELAYS;
export const THEME = uiConstantsData.THEME;

export type UITextKeys = keyof typeof UI_TEXT;
export type AnimationDelayKeys = keyof typeof ANIMATION_DELAYS;
export type ThemeKeys = keyof typeof THEME;
