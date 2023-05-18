export type VtsTheme = 'default' | 'dark' | 'success' | 'warning' | 'danger' | 'info'

export type VtsThemeItem = { theme: VtsTheme, url: string }

export type VtsThemeConfig = {
    themes: VtsThemeItem[],
    defaultTheme: VtsTheme
}