// themes.js ou dentro do seu index.js
const themes = {
    // Tema Escuro Padrão (GitHub Dark)
    dark: {
        name: 'Dark',
        isDark: true,
        colors: {
            background: {
                primary: '#0d1117',
                secondary: '#161b22',
                gradient: ['#0f172a', '#581c87', '#0f172a']
            },
            text: {
                primary: '#ffffff',
                secondary: '#8b949e',
                muted: '#6e7681'
            },
            accent: {
                primary: '#2f81f7',
                secondary: '#a371f7',
                tertiary: '#ff7b72'
            },
            icon: {
                primary: '#94a3b8',
                secondary: '#f472b6',
                tertiary: '#60a5fa'
            },
            social: {
                background: '#1e293b',
                icon: '#ffffff'
            },
            border: '#30363d',
            card: '#0d1117'
        }
    },

    // Tema Claro
    light: {
        name: 'Light',
        isDark: false,
        colors: {
            background: {
                primary: '#ffffff',
                secondary: '#f6f8fa',
                gradient: ['#eff6ff', '#faf5ff', '#fdf2f8']
            },
            text: {
                primary: '#24292e',
                secondary: '#57606a',
                muted: '#6e7781'
            },
            accent: {
                primary: '#0969da',
                secondary: '#8250df',
                tertiary: '#cf222e'
            },
            icon: {
                primary: '#475569',
                secondary: '#db2777',
                tertiary: '#2563eb'
            },
            social: {
                background: '#e2e8f0',
                icon: '#24292e'
            },
            border: '#d0d7de',
            card: '#ffffff'
        }
    },

    // Tema Neon/Dracula
    dracula: {
        name: 'Dracula',
        isDark: true,
        colors: {
            background: {
                primary: '#282a36',
                secondary: '#44475a',
                gradient: ['#282a36', '#bd93f9', '#282a36']
            },
            text: {
                primary: '#f8f8f2',
                secondary: '#6272a4',
                muted: '#44475a'
            },
            accent: {
                primary: '#bd93f9',
                secondary: '#ff79c6',
                tertiary: '#50fa7b'
            },
            icon: {
                primary: '#6272a4',
                secondary: '#ff79c6',
                tertiary: '#8be9fd'
            },
            social: {
                background: '#44475a',
                icon: '#f8f8f2'
            },
            border: '#6272a4',
            card: '#282a36'
        }
    },

    // Tema Solarized
    solarized: {
        name: 'Solarized',
        isDark: true,
        colors: {
            background: {
                primary: '#002b36',
                secondary: '#073642',
                gradient: ['#002b36', '#b58900', '#002b36']
            },
            text: {
                primary: '#839496',
                secondary: '#586e75',
                muted: '#657b83'
            },
            accent: {
                primary: '#b58900',
                secondary: '#cb4b16',
                tertiary: '#dc322f'
            },
            icon: {
                primary: '#586e75',
                secondary: '#b58900',
                tertiary: '#268bd2'
            },
            social: {
                background: '#073642',
                icon: '#839496'
            },
            border: '#586e75',
            card: '#002b36'
        }
    },

    // Tema Nord
    nord: {
        name: 'Nord',
        isDark: true,
        colors: {
            background: {
                primary: '#2e3440',
                secondary: '#3b4252',
                gradient: ['#2e3440', '#5e81ac', '#2e3440']
            },
            text: {
                primary: '#eceff4',
                secondary: '#e5e9f0',
                muted: '#d8dee9'
            },
            accent: {
                primary: '#88c0d0',
                secondary: '#81a1c1',
                tertiary: '#5e81ac'
            },
            icon: {
                primary: '#81a1c1',
                secondary: '#b48ead',
                tertiary: '#a3be8c'
            },
            social: {
                background: '#3b4252',
                icon: '#eceff4'
            },
            border: '#4c566a',
            card: '#2e3440'
        }
    },

    // Tema GitHub Light (alternativo)
    github_light: {
        name: 'GitHub Light',
        isDark: false,
        colors: {
            background: {
                primary: '#f6f8fa',
                secondary: '#ffffff',
                gradient: ['#f6f8fa', '#ffffff', '#f6f8fa']
            },
            text: {
                primary: '#24292f',
                secondary: '#57606a',
                muted: '#8c959f'
            },
            accent: {
                primary: '#0969da',
                secondary: '#1f883d',
                tertiary: '#bc4c00'
            },
            icon: {
                primary: '#57606a',
                secondary: '#bf3989',
                tertiary: '#0969da'
            },
            social: {
                background: '#ffffff',
                icon: '#24292f'
            },
            border: '#d0d7de',
            card: '#ffffff'
        }
    },

    // Tema Sunset (cores quentes)
    sunset: {
        name: 'Sunset',
        isDark: true,
        colors: {
            background: {
                primary: '#1e1b2b',
                secondary: '#2d2438',
                gradient: ['#1e1b2b', '#ff6b6b', '#1e1b2b']
            },
            text: {
                primary: '#fff5e6',
                secondary: '#ffb347',
                muted: '#a37871'
            },
            accent: {
                primary: '#ff6b6b',
                secondary: '#ffb347',
                tertiary: '#4ecdc4'
            },
            icon: {
                primary: '#ffb347',
                secondary: '#ff6b6b',
                tertiary: '#4ecdc4'
            },
            social: {
                background: '#2d2438',
                icon: '#fff5e6'
            },
            border: '#a37871',
            card: '#1e1b2b'
        }
    },

    // Tema Ocean
    ocean: {
        name: 'Ocean',
        isDark: true,
        colors: {
            background: {
                primary: '#1a2639',
                secondary: '#2c3e50',
                gradient: ['#1a2639', '#2980b9', '#1a2639']
            },
            text: {
                primary: '#ecf0f1',
                secondary: '#bdc3c7',
                muted: '#95a5a6'
            },
            accent: {
                primary: '#3498db',
                secondary: '#2980b9',
                tertiary: '#1abc9c'
            },
            icon: {
                primary: '#3498db',
                secondary: '#9b59b6',
                tertiary: '#1abc9c'
            },
            social: {
                background: '#2c3e50',
                icon: '#ecf0f1'
            },
            border: '#34495e',
            card: '#1a2639'
        }
    }
};

// Função para obter um tema específico
function getTheme(themeName = 'dark') {
    return themes[themeName] || themes.dark;
}

// Função para aplicar o tema ao SVG
function applyTheme(svgContent, theme) {
    // Substitui as variáveis de cor pelos valores do tema
    return svgContent
        .replace(/\${bgPrimary}/g, theme.colors.background.primary)
        .replace(/\${bgSecondary}/g, theme.colors.background.secondary)
        .replace(/\${textPrimary}/g, theme.colors.text.primary)
        .replace(/\${textSecondary}/g, theme.colors.text.secondary)
        .replace(/\${accentPrimary}/g, theme.colors.accent.primary)
        .replace(/\${accentSecondary}/g, theme.colors.accent.secondary)
        .replace(/\${iconPrimary}/g, theme.colors.icon.primary)
        .replace(/\${iconSecondary}/g, theme.colors.icon.secondary)
        .replace(/\${socialBg}/g, theme.colors.social.background)
        .replace(/\${socialIcon}/g, theme.colors.social.icon)
        .replace(/\${borderColor}/g, theme.colors.border)
        .replace(/\${cardBg}/g, theme.colors.card);
}

export { themes, getTheme, applyTheme };