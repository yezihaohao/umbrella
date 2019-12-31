module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: false, // 设置console可打印出来
    setupFiles: ['./internal/browserMocks.ts'],
};
