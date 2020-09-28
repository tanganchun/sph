import Mock from "mockjs";
import banners from "./json/banners"
import floors from "./json/floors"

//创建假的接口
Mock.mock("/mock/banners",{
    code:200,
    data:banners
})

Mock.mock("/mock/floors",{
    code:200,
    data:floors
})