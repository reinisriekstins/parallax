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
  // controls fade in of clothing grid
  if (wScroll > $clothesPics.offset().top - $window.height() / 1.5) {
    $clothesPicsFigure.each((i) => {

      setTimeout(() => {
        $clothesPicsFigure.eq(i).addClass('is-showing')
      }, 150 * (i+1))
    })
  }

  // constroles movement of "Fall suits"
  if (wScroll > $largeWindow.offset().top - $window.height()) {
    $largeWindow.css({
      'background-position': `center ${wScroll - $largeWindow.offset().top }px`
    })

    $windowTint.css({
      opacity: (wScroll - $largeWindow.offset().top + 400) / (wScroll / 5)
    })
  }

  // controles movement of the blog post articles
  if (wScroll > $blogPosts.offset().top - $window.height()) {
    const offset = Math.min(0, wScroll - $blogPosts.offset().top + $window.height() - 350)
    
    $post1.css({
      transform: `translate(${offset}px, ${Math.abs(offset * 0.2)}px)`
    })

    $post3.css({
      transform: `translate(${Math.abs(offset)}px, ${Math.abs(offset * 0.2)}px)`
    })
  }
}
