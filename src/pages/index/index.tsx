import React, { Component } from "react";
import { View } from "@tarojs/components";
import Taro from '@tarojs/taro'
import { AtCard } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <AtCard
          note="小Tips"
          extra="额外信息"
          title="抽奖示例"
          className="demo-card"
          onClick={
            ()=>Taro.navigateTo({
              url: '/pages/lottery/index'
            })     
          }
        >
          这也是内容区 可以随意定义功能
        </AtCard>
        <AtCard
          note="小Tips"
          extra="额外信息"
          title="活动示例"
          className="demo-card"
        >
          这也是内容区 可以随意定义功能
        </AtCard>
      </View>
    );
  }
}
