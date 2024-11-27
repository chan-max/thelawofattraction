import axios from 'axios';

export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();
    const apiKey = config.public.apiKey; // 从配置中获取 apiKey
    const apiURL = config.public.apiURL; // 从配置中获取 apiURL


    // 获取游戏列表数据
    try {
        return [
        ];
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
});
