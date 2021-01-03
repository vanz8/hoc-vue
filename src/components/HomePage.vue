<template>
  <div>
    <div :style="{ textAlign: 'center' }">
      <h1>We support the builders.</h1>
      <p>Help fund support your open source projects with personal tokens</p>
      <a-button type="primary"> Request Beta Access </a-button>
    </div>
    <div :style="{ margin: '50px 0' }">
      <a-carousel
        autoplay
        :style="{
          width: '70%',
          margin: 'auto',
          border: '3px solid black',
          borderRadius: '10px',
          padding: '10px',
        }"
      >
        <div>
          <img
            src="@/assets/image1.png"
            :style="{ width: '100%' }"
          />
        </div>
      </a-carousel>
    </div>
    <div :style="{ margin: '50px 0' }">
      <div :style="{ width: '40%', margin: 'auto' }">
        <h2 :style="{ textAlign: 'center' }">Here’s how it works</h2>
        <a-card hoverable>
          <p>
            Maintaining an open source project is difficult. We’re here to help
            make it a little bit easier. With our product, you’ll be able to
            mint your own personal tokens. You can reward these tokens to
            contributors of your open source project. You can even monetize
            these tokens for people to buy and redeem your services. People can
            buy your tokens or be rewarded with them. You choose how they’re
            redeemed. Some possibilities for token redemption include redeeming
            tokens for your time or setting up a feature to include in your
            project after a token amount has been received. You choose.
          </p>
        </a-card>
      </div>
      <a-card :bordered="false" :style="{ margin: '50px 0' }">
        <a-card-grid>Mint</a-card-grid>
        <a-card-grid>Reward</a-card-grid>
        <a-card-grid>Monetize</a-card-grid>
        <a-card-grid>Redeem</a-card-grid>
      </a-card>
      <div :style="{ width: '40%', margin: 'auto' }">
        <h4 :style="{ textAlign: 'center' }">Want to partner with us?</h4>
        <h4 :style="{ textAlign: 'center' }">
          Shoot us a message at: billy@joinkreative.club
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.ant-card-grid {
  width: 25%;
  text-align: center;
  box-shadow: none;
  font-size: 26px;
  font-weight: 500;
}
</style>
