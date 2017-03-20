import './styles/index.sass'
import $ from 'jquery'

const
  $window = $(window),
  $logo = $('.logo'),
  $backbird = $('.back-bird'),
  $forebird = $('.fore-bird'),
  $clothesPics = $('.clothes-pics'),
  $clothesPicsFigure = $('.clothes-pics figure'),
  $largeWindow = $('.large-window'),
  $windowTint = $('.window-tint'),
  $blogPosts = $('.blog-posts'),
  $post1 = $('.post-1'),
  $post2 = $('.post-2'),
  $post3 = $('.post-3')

let
  postsTop = $blogPosts.offset().top,
  winHeight = $window.height(),
  windowScrollTop = $window.scrollTop()

gridElementFadeIn(windowScrollTop)
postsFadeIn(windowScrollTop)

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
  postsFadeIn(wScroll)

})

function gridElementFadeIn(wScroll) {
  // controls fade in of clothing grid
  if (wScroll > $clothesPics.offset().top - $window.height() / 1.5) {
    $clothesPicsFigure.each((i) => {

      setTimeout(() => {
        $clothesPicsFigure.eq(i).addClass('is-showing')
      }, 150 * (i+1))
    })
  }

  // constrols movement of "Fall suits"
  if (wScroll > $largeWindow.offset().top - $window.height()) {
    $largeWindow.css({
      'background-position': `center ${wScroll - $largeWindow.offset().top }px`
    })

    $windowTint.css({
      opacity: (wScroll - $largeWindow.offset().top + 400) / (wScroll / 5)
    })
  }
}

// controls movement of the blog post articles
function postsFadeIn(wScroll) {
  let goal = postsTop - winHeight / 8
  let offset

  if (wScroll < goal) {
    offset = Math.min(0.005*Math.pow(wScroll - goal, 2), winHeight)
  }
  else {
    offset = 0
  }

  $post1.css({
    transform: `translate(${-offset}px, ${offset * 0.2}px)`
  })

  $post3.css({
    transform: `translate(${offset}px, ${offset * 0.2}px)`
  })
}
