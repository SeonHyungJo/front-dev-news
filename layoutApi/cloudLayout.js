class CloudLayout {
  static get inputProperties() {
    return ["--random-seed", "--cloud-level"];
  }
  
  *intrinsicSizes(children, edges, styleMap) {
  }
  *layout(children, edges, constraints, styleMap){
    const childFragments = yield children.map(child => {
      const level = parseInt(child.styleMap.get("--cloud-level"))
      return child.layoutNextFragment({...constraints, level: level})
    })

    const availableInlineSize = constraints.fixedInlineSize;
    const availableBlockSize = constraints.fixedBlockSize;
    const randomSeed = parseInt(styleMap.get("--random-seed"));

    let seed = randomSeed;
    const random = () => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    let nextBlockOffset = 0;
    for (const fragment of childFragments) {
      let i = 0;
      console.log(fragment)
      fragment.blockOffset = random() * availableBlockSize;
      fragment.inlineOffset = random() * availableInlineSize;
    }

    return{
      childFragments
    }
  }
}

registerLayout("cloud", CloudLayout);