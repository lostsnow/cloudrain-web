<template>
  <div class="root">
    <div class="bar-container">
      <div class="health" ref="health-bar"></div>
      <div class="text">
        <div class="visible">{{ $t("char.vitals.health") }} - 100%</div>
        <div class="extended">1000 / 1000</div>
      </div>
      <div
        class="border-overlay"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      ></div>
    </div>
    <div class="bar-container">
      <div class="stamina" ref="stamina-bar"></div>
      <div class="text">
        <div class="visible">{{ $t("char.vitals.stamina") }} - 100%</div>
        <div class="extended">1000 / 1000</div>
      </div>
      <div
        class="border-overlay"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      ></div>
    </div>
  </div>
  <div class="root">
    <div class="bar-container">
      <div class="mana" ref="mana-bar"></div>
      <div class="text">
        <div class="visible">{{ $t("char.vitals.mana") }} - 100%</div>
        <div class="extended">1000 / 1000</div>
      </div>
      <div
        class="border-overlay"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      ></div>
    </div>
    <div class="bar-container">
      <div class="sprit" ref="sprit-bar"></div>
      <div class="text">
        <div class="visible">{{ $t("char.vitals.sprit") }} - 100%</div>
        <div class="extended">1000 / 1000</div>
      </div>
      <div
        class="border-overlay"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharVitals",
  methods: {
    handleMouseOver: function (e) {
      const textSibling = e.target.parentNode.querySelector(".text");
      textSibling.classList.add("show-extended");
    },

    handleMouseOut: function (e) {
      const textSibling = e.target.parentNode.querySelector(".text");
      textSibling.classList.remove("show-extended");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/common.module";

.root {
  display: flex;
  height: 22px;
  background-color: #0c0c0c;
  justify-content: space-between;
}

.root .bar-container {
  flex-basis: 50%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  position: relative;
  overflow: hidden;
  margin-left: 2px;
  margin-right: 2px;
  @include defaultBorderImage;
}
.root .bar-container:first-child {
  margin-left: 0;
}
.root .bar-container:last-child {
  margin-right: 0;
}

.root .bar-container .border-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}

.root .bar-container .border-overlay:hover {
  cursor: pointer;
}

.root .bar-container .health {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(224, 82, 82);
  background: linear-gradient(
    180deg,
    rgba(224, 82, 82, 1) 15%,
    rgba(217, 38, 38, 1) 16%,
    rgba(217, 38, 38, 1) 84%,
    rgba(173, 31, 31, 1) 85%
  );
  border-right: 2px solid #e0628c;
}

.root .bar-container .mana {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(82, 177, 224);
  background: linear-gradient(
    180deg,
    rgba(82, 177, 224, 1) 15%,
    rgba(38, 157, 217, 1) 16%,
    rgba(38, 157, 217, 1) 84%,
    rgba(31, 126, 173, 1) 85%
  );
  border-right: 2px solid #6dc5ec;
}

.root .bar-container .stamina {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(224, 170, 82);
  background: linear-gradient(
    180deg,
    rgba(224, 170, 82, 1) 15%,
    rgba(217, 148, 38, 1) 16%,
    rgba(217, 148, 38, 1) 84%,
    rgba(173, 119, 31, 1) 85%
  );
  border-right: 2px solid #e2a895;
}

.root .bar-container .sprit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(224, 170, 82);
  background: linear-gradient(
    180deg,
    rgb(190, 87, 211) 15%,
    rgb(168, 29, 180) 16%,
    rgb(168, 29, 180) 84%,
    rgb(118, 24, 131) 85%
  );
  border-right: 2px solid #e2a895;
}

.root .bar-container .text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-shadow: 0px 0px 4px #000;
}

.root .bar-container .text .visible {
  position: absolute;
  transition: all 0.1s ease-in-out;
  top: 1px;
}

.root .bar-container .text .extended {
  position: absolute;
  transition: all 0.1s ease-in-out;
  top: -50px;
}

.root .bar-container .text.show-extended .extended {
  top: 3px;
}

.root .bar-container .text.show-extended .visible {
  top: 50px;
}
</style>
