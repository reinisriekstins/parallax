import './styles/index.sass'
import $ from 'jquery'

const
  $window = $(window),
  $logo = $('.logo'),
  $backbird = $('.back-bird'),
  $forebird = $('.fore-bird'),
  $clothesPics = $('.clothes-pics'),
  $clothesPicsFigure = $('.clothes-pics figure')

gridElementFadeIn($window.scrollTop())

$window.scroll(() => {
  var wScroll = $window.scrollTop()

  // parallax for top logo, background and foreground birds
  $logo.css({
    transform: `translate(0px, ${wScroll/2}%)`
  })
  $backbird.css({
    transform: `translate(0px, ${wScroll/4}%)`
  })
  $forebird.css({
    transform: `translate(0px, -${wScroll/50}%)`
  })

  gridElementFadeIn(wScroll)
})

function gridElementFadeIn(wScroll) {
  if (wScroll > $clothesPics.offset().top - $window.height() / 1.5) {
    $clothesPicsFigure.each((i) => {

      setTimeout(() => {
        $clothesPicsFigure.eq(i).addClass('is-showing')
      }, 150 * (i+1))
    })
  }
}
