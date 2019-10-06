const headerEl = document.getElementById('header');
const avatarEl = document.getElementById('avatar');
const scrollingContainerEl = document.getElementById('scrollingContainer');


const scrollTimeline  = new ScrollTimeline({
  scrollSource: scrollingContainerEl,
  orientation: 'block',
  timeRange: 1000,
  startScrollOffset: 0,
  endScrollOffset: headerEl.clientHeight
});

const effects = [
    /* avatar scales down as we scroll up */
    new KeyframeEffect(avatarEl,
                    {transform: ['scale(1)', 'scale(0.5)']},
                    {duration: scrollTimeline.timeRange}),
    /* header loses transparency as we scroll up */
    new KeyframeEffect(headerEl,
                    {opacity: [0, 0.8]},
                    {duration: scrollTimeline.timeRange})
];

await CSS.animationWorklet.addModule('twitter-header-animator.js');
const animation = new WorkletAnimation('twitter-header', effects, scrollTimeline);

animation.play();