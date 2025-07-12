import translations from '../data/en.json'

type TranslationKey = string
type InterpolationValues = Record<string, string | number>

const t = (key: TranslationKey, values?: InterpolationValues): string => {
  const keys = key.split('.')
  let result: unknown = translations

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k]
    } else {
      console.warn(`Translation key "${key}" not found`)
      return key
    }
  }

  if (typeof result !== 'string') {
    console.warn(`Translation key "${key}" does not resolve to a string`)
    return key
  }

  if (values) {
    return result.replace(
      /\{(\w+)\}/g,
      (match: string, placeholder: string) => {
        const value = values[placeholder]
        return value !== undefined ? String(value) : match
      }
    )
  }

  return result
}

export const useTranslation = () => ({ t })

export default useTranslation
