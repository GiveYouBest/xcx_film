<view class="u-tabs data-v-3662e1cf" style="{{'background:'+(bgColor)+';'}}" id="{{id}}"><scroll-view class="u-scroll-view data-v-3662e1cf" scroll-x="{{true}}" scroll-left="{{scrollLeft}}" scroll-with-animation="{{true}}"><view class="{{['u-scroll-box data-v-3662e1cf',(!isScroll)?'u-tabs-scorll-flex':'']}}"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="u-tab-item data-v-3662e1cf" style="{{item.s0}}" id="{{'u-tab-item-'+index}}" data-event-opts="{{[['tap',[['clickTab',[index]]]]]}}" bindtap="__e">{{''+(item.$orig[name]||item.$orig['name'])+''}}</view></block><block qq:if="{{showBar}}"><view class="u-tab-bar data-v-3662e1cf" style="{{$root.s1}}"></view></block></view></scroll-view></view>