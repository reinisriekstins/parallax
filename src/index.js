import './styles/index.sass'
import $ from 'jquery'

const
  $window = $(window),
  $logo = $('.logo'),
  $backbird = $('.back-bird'),
  $forebird = $('.fore-bird')

$window.scroll(() => {
  var wScroll = $window.scrollTop()
  console.log(wScroll)

  $logo.css({
    transform: `translate(0px, ${wScroll/2}%)`
  })

  $backbird.css({
    transform: `translate(0px, ${wScroll/4}%)`
  })

  $forebird.css({
    transform: `translate(0px, -${wScroll/50}%)`
  })
})
