class CloudLayout {
  static get inputProperties() {
    return ["--random-seed"];
  }
  
  *intrinsicSizes(children, edges, styleMap) {
  }

  *layout(children, edges, constraints, styleMap){
    const childFragments = yield children.map(child => {
      return child.layoutNextFragment()
    })

    const availableInlineSize = constraints.fixedInlineSize;
    const availableBlockSize = constraints.fixedBlockSize;
    const randomSeed = parseInt(styleMap.get("--random-seed"));

    let seed = randomSeed;
    const random = () => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    for (const fragment of childFragments) {
      fragment.blockOffset = random() * availableBlockSize;
      fragment.inlineOffset = random() * availableInlineSize;
    }

    return{
      childFragments
    }
  }
}

registerLayout("cloud", CloudLayout);