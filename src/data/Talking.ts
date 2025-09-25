export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  render: (data: any) => data,
  combine: true, // 合并数据
  // api 为空则使用 data 静态数据 
  // 注意：图片请用 byt-img-flex 类包裹
  data: [
    {
      "date": "2024-10-08 18:18:18",
      "tags": [
        "日常",
        "工作"
      ],
      "content": "下班！"
    },
    {
      "date": "2024-10-05 16:16:06",
      "tags": [
        "日常"
      ],
      "content": "记录第一条说说"
    }
  ]
}