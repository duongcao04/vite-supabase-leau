import * as yup from 'yup'

// 1. Add .required() for critical variables and defaults for others
const configSchema = yup.object({
    appTitle: yup.string().default('isovalve'),
    appVersion: yup.string().default('v1.0.0'),
    apiEndpoint: yup.string().required('VITE_API_ENDPOINT is required'),
    appUrl: yup.string().required('VITE_APP_URL is required'),
})

function configProject() {
    try {
        const config = configSchema.validateSync(
            {
                appTitle: import.meta.env.VITE_APP_TITLE,
                appVersion: import.meta.env.VITE_APP_VERSION,
                apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
                appUrl: import.meta.env.VITE_APP_URL,
            },
            {
                abortEarly: false, // Show all missing vars at once, not just the first one
            },
        )

        console.table(config)
        return config
    } catch (error) {
        // 3. Log specific validation errors so you know what to fix
        if (error instanceof yup.ValidationError) {
            console.error('❌ Env Validation Error:', error.errors)
        } else {
            console.error(error)
        }
        throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
    }
}

export const envConfig = configProject()
