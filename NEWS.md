---
marp: true
title: Worklet
description: Worklet
theme: base
paginate: true
---
<!-- Global style -->
<style>
h1 {
  color: #fff;
  font-size: 102px;
  text-align: center;
}

h2 {
  font-size: 48px;
  color: #579DDC;
}

section {
  background: #1B1B1B;
  color: #fff;
  padding: 35px;
  font-size: 22px;
}

pre {
    background: #1B1B1B;
}
</style>

# Worklet

---
## Worklet이란

> Worklet 인터페이스는 Web Workers의 경량 버전이며 개발자가 렌더링 파이프 라인의 하위 수준에 접근할 수 있도록 해준다. Worklet을 사용하면 JavaScript 및 WebAssembly 코드를 실행하여 고성능이 필요한 경우 그래픽 렌더링 또는 오디오 처리를 수행 할 수 있다. - MDN

- 기본적으로 Worker는 한 Thread에 하나가 생성이 가능하지만, Worklet은 한 Thread에 여러 개 생성이 가능합니다.
- 메인 Thread에서 만들 수 있습니다.
- 독립적인 GlobalScope와 Event loop를 가집니다.

---
#### Reference

- [houdini-draft](https://drafts.css-houdini.org/)
- [googlechromelabs-sample](https://googlechromelabs.github.io/houdini-samples/)
- [masonry - sample](https://googlechromelabs.github.io/houdini-samples/layout-worklet/masonry/)
- [css-houdini.rocks](https://css-houdini.rocks/)
- [Is houdini ready yet](https://ishoudinireadyyet.com/)