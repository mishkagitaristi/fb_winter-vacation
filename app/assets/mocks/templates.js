let template = {
    logIn : 
    `<header class="header-login">
    <div class="wrapper-login fl_jus-bet">
        <h1><a class="header-login__logo" href="index.html" title="Go to Facebook Home"></a></h1>
        <div class="header-login__auth">
            <div class="auth__item auth--mail fl_col">
                <span class="auth__text">Email or Phone</span>
                <input id="userLogin" class="auth__input" type="email" name="Email">
            </div>
            <div class="auth__item auth--pass fl_col">
                <span class="auth__text">Password</span>
                <input id="userPassword" class="auth__input" type="password" name="Password">
                <a class="auth__link" href="#">Forgot account?</a>
            </div>
            <div class="auth__item auth--btn fl_center">
                <button class="auth__btn" id="loginBtn" onclick="functions.logInBtn()">Log In</button>
            </div>
        </div>
    </div>
    </header>

    <main class="main-login">
    <div class="wrapper-login fl_jus-bet">
            <div class="main-login--left">
                <h3 class="main-login__heading">Recent Logins</h3>
                <span class="main-login__text">Click your picture or add an account.</span>
                <div class="main-login__recent">
                    <a class="recent__item" href="#">
                        <div class="recent__noimg"></div>
                        <span class="recent__name blue">Add Account</span>
                    </a>
                </div>
            </div>
            
            <div class="main-login--right">
                <h3 class="main-login__heading">Create a New Account</h3>
                <span class="main-login__text">It’s free and always will be.</span>
                <div class="main-login__form fl_col">
                    <div class="flex">
                        <input class="form__input" style="margin-right:10px" type="text" placeholder="First name" required>
                        <input class="form__input" type="text" placeholder="Last name" required>
                    </div>
                    <input class="form__input" type="email" placeholder="Mobile number or email" required>
                    <input class="form__input" type="password" placeholder="New password" required>
                    <span class="form__heading">Birthday</span>
                    <div class="flex">
                        <select class="form__dropdown" title="Month">
                            <option value="0">Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11" selected="1">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select class="form__dropdown" title="Day">
                            <option value="0">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25" selected="1">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select class="form__dropdown" title="Year">
                            <option value="0">Year</option>
                            <option value="1" selected="1">1993</option>
                            <option value="2">1994</option>
                            <option value="3">1995</option>
                            <option value="4">1996</option>
                            <option value="5">1997</option>
                            <option value="6">1998</option>
                            <option value="7">1999</option>
                            <option value="8">2000</option>
                            <option value="9">2001</option>
                            <option value="10">2002</option>
                        </select>
                        <a class="form__bday">Why do I need to provide my birthday?</a>
                    </div>
                    <div class="form__checkbox flex">
                        <div>
                            <input class="form__input--checkbox" type="radio">
                            <span class="form__heading">Female</span>
                        </div>
                        <div>
                            <input class="form__input--checkbox" type="radio">
                            <span class="form__heading">Male</span>
                        </div>
                    </div>
                    <div class="form__agreement">
                        <p>By clicking Sign Up, you agree to our 
                            <a href="#">Terms</a>, 
                            <a href="#">Data Policy</a> and 
                            <a href="#">Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <button class="form__btn">Sign Up</button>
                    <div class="reg_pages_msg">
                        <a href="#">Create a Page</a>  for a celebrity, band or business.
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
    <div class="wrapper-login">
        <ul class="footer__list">
            <li>English (US)</li>
            <li><a href="#">ქართული</a></li>
            <li><a href="#">Русский</a></li>
            <li><a href="#">Türkçe</a></li>
            <li><a href="#">Deutsch</a></li>
            <li><a href="#">Azərbaycan dili</a></li>
            <li><a href="#">العربية</a></li>
            <li><a href="#">Français (France)</a></li>
            <li><a href="#">Ελληνικά</a></li>
            <li><a href="#">Español</a></li>
            <li><a href="#">Português (Brasil)</a></li>
            <li class="footer__plus"></li>
        </ul>
        <div class="break-line"></div>
        <ul class="footer__list list__second">
            <li><a href="#" title="Sign Up for Facebook">Sign Up</a></li>
            <li><a href="#" title="Log into Facebook">Log In</a></li>
            <li><a href="#" title="Check out Messenger.">Messenger</a></li>
            <li><a href="#" title="Facebook Lite for Android.">Facebook Lite</a></li>
            <li><a href="#" title="Check out Facebook Mobile.">Mobile</a></li>
            <li><a href="#" title="Find anyone on the web.">Find Friends</a></li>
            <li><a href="#" title="Browse our people directory.">People</a></li>
            <li><a href="#" title="Browse our pages directory.">Pages</a></li>
            <li><a href="#">Page Categories</a></li>
            <li><a href="#" title="Check out popular places on Facebook.">Places</a></li>
            <li><a href="#" title="Check out Facebook games.">Games</a></li>
            <li><a href="#" title="Browse our places directory.">Locations</a></li>
            <li><a href="#" title="Browse our marketplace product directory.">Marketplace</a></li>
            <li><a href="#" title="Browse our Groups directory.">Groups</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#" title="Browse our Local Lists directory.">Local</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Create Ad</a></li>
            <li><a href="#" title="Create a Page">Create Page</a></li>
            <li><a href="#" title="Develop on our platform.">Developers</a></li>
            <li><a href="#" title="Make your next career move to our awesome company.">Careers</a></li>
            <li><a href="#" title="Learn about your privacy and Facebook.">Privacy</a></li>
            <li><a href="#" title="Learn about cookies and Facebook.">Cookies</a></li>
            <li><a href="#">Ad Choices</a></li>
            <li><a href="#" title="Review our terms and policies.">Terms</a></li>
            <li><a href="#">Account Security</a></li>
            <li><a href="#">Login Help</a></li>
            <li><a href="#" title="Visit our Help Center.">Help</a></li>
        </ul>
        <div class="copyright">Facebook © 2018</div>
    </div>
    </footer>`,

    loggedIn :
    `<!-- HEADER -->
    <header class="header">
        <section class="container fl_center">
            <section class="header__inner wrapper">
                <!-- HEADER LEFT PART -->
                <div class="header__inner-left">
                    <h1 class="header__logo"><a href="#" title="Facebook - Social Network"></a></h1>
                    <form class="header__search-form" action="#">
                        <input class="header__search-input" type="search" placeholder="Search">
                        <button class="header__search-button">
                            <i class="header__search-button-icon"></i>
                        </button>
                    </form>
                </div>
                <!-- /HEADER LEFT PART -->

                <!-- HEADER RIGHT PART -->
                <div class="header__inner-right">
                    <!-- HEADER RIGHT FIRST PART -->
                    <div class="header__inner-right-item">
                        <a href="#" class="header__inner-right-link">
                            <img class="header__inner-right-image" src="./assets/images/profile_img.jpg" alt="Profile">
                            <span class="header__inner-right-text">მიხეილ</span>
                        </a>
                        <span class="header__inner-right-border"></span>
                    </div>
                    <div class="header__inner-right-item">
                        <a href="#" class="header__inner-right-link">
                            <span class="header__inner-right-text">Home</span>
                        </a>
                        <span class="header__inner-right-border"></span>
                    </div>
                    <div class="header__inner-right-item">
                        <a href="#" class="header__inner-right-link">
                            <span class="header__inner-right-text">Create</span>
                        </a>
                        <span class="header__inner-right-border"></span>
                    </div>
                    <!-- /HEADER RIGHT FIRST PART -->

                    <!-- HEADER RIGHT ICONS PART -->
                    <div class="header__inner-right-item right-item-second">
                        <a href="#" class="header__inner-right-icons" title="Friend Requests">
                            <i class="right-icons right-icons-friends"></i>
                        </a>
                        <a href="#" class="header__inner-right-icons" title="Messages">
                            <i class="right-icons right-icons-messages"></i>
                        </a>
                        <a href="#" class="header__inner-right-icons" title="Notifications">
                            <i class="right-icons right-icons-notifications"></i>
                        </a>
                    </div>
                    <!-- /HEADER RIGHT ICONS PART -->

                    <!-- HEADER RIGHT LAST PART -->
                    <div class="header__inner-right-item right-item-third">
                        <span class="header__inner-right-border"></span>
                        <a href="#" class="header__inner-right-icons" title="Quick Help">
                            <i class="right-icons right-icons-help"></i>
                        </a>
                        <a href="#" class="header__inner-right-icons">
                            <i class="right-icons right-icons-dropdown"></i>
                        </a>
                    </div>
                    <!-- /HEADER RIGHT LAST PART -->
                </div>
                <!-- /HEADER RIGHT PART -->
            </section>
        </section>
    </header>
    <section class="header__sub">
        <div class="wrapper fl_jus-bet">
            <div class="header__sub--left fl_center">
                <ul class="header__sub-list">
                    <li class="header__sub-list-item"><a href="#">Page</a></li>
                    <li class="header__sub-list-item"><a href="#">Inbox</a></li>
                    <li class="header__sub-list-item"><a href="#">Notifications</a></li>
                    <li class="header__sub-list-item"><a href="#">Insights</a></li>
                    <li class="header__sub-list-item"><a href="#">Publishing Tools</a></li>
                    <li class="header__sub-list-item"><a href="#">Ad Center</a></li>
                </ul>
            </div>
            <div class="header__sub--right fl_center">
                <ul class="header__sub-list">
                    <li class="header__sub-list-item"><a href="#">Settings</a></li>
                    <li class="header__sub-list-item"><a href="#">Help</a></li>
                </ul>
            </div>
        </div>
    </section>
    <!-- /HEADER -->

    <!-- MAIN SECTION -->
    <main class="main">
        <section class="container">
            <section class="main__inner wrapper fl_jus-bet">
                <aside class="main__sidebar">
                    <a class="main__sidebar-image" href="#"><img src="./assets/images/page_img.jpg" alt="Page Profile Photo"></a>
                    <h2 class="main__sidebar-heading">Page Name</h2>
                    <span class="main__sidebar-url">@PageUrl</span>
                    <ul class="main__sidebar-list">
                        <li class="sidebar-list__item active"><a href="#">Home</a></li>
                        <li class="sidebar-list__item"><a href="#">Posts</a></li>
                        <li class="sidebar-list__item"><a href="#">Videos</a></li>
                        <li class="sidebar-list__item"><a href="#">Photos</a></li>
                        <li class="sidebar-list__item"><a href="#">About</a></li>
                        <li class="sidebar-list__item"><a href="#">Exclusive</a></li>
                        <li class="sidebar-list__item"><a href="#">Community</a></li>
                        <li class="sidebar-list__item"><a href="#">Info and Ads</a></li>
                    </ul>
                    <button class="main__sidebar-btn">Create a Page</button>
                </aside>
                <section class="main__content">
                    <section class="main__cover">
                        <div class="main__cover--top">
                            <a href="#"><img class="main__cover-image" src="#" alt="Cover Image"></a>
                        </div>
                        <div class="main__cover--bottom fl_jus-bet">
                            <div class="cover__buttons">
                                <div class="cover-button button--liked">Liked</div>
                                <div class="cover-button button--following">Following</div>
                                <div class="cover-button button--share">Share</div>
                                <div class="cover-button button--dots">...</div>
                            </div>
                            <button class="cover__send-message fl_center">
                                <i class="message-icon"></i>
                                Send Message
                            </button>
                        </div>
                    </section>
                    <section class="main__articles flex">
                        <div class="main__articles--left">
                            <div class="section-articles__post">
                                <div class="section-articles__post-top">
                                    <a href="#" class="articles__post-top-icon icons_make-post">Make Post<span class="section-articles__post-top-border"></span></a>
                                    <a href="#" class="articles__post-top-icon icons_photo-album">Photo/Video Album<span class="section-articles__post-top-border"></span></a>
                                    <a href="#" class="articles__post-top-icon icons_live-video">Live Video</a>
                                </div>
                                <div class="section-articles__post-center">
                                    <div class="section-articles__post-center-profile">
                                        <img src="./assets/images/profile_img.jpg" alt="Profile Image" width="40px" height="40px">
                                    </div>
                                    <form action="#" class="section-articles__post-center-form">
                                        <textarea id="textarea" onkeypress="functions.articlePost(event)" name="articles__post" placeholder="What's on your mind, მიხეილ?"></textarea>
                                    </form>
                                </div>
                                <div class="section-articles__post-breakline"></div>
                                <div class="section-articles__post-bottom">
                                    <a href="#" class="articles__post-bottom-icon icons_photo-video">Photo/Video</a>
                                    <a href="#" class="articles__post-bottom-icon icons_tag-friends">Tag Friends</a>
                                    <a href="#" class="articles__post-bottom-icon icons_feeling-activity">Feeling/Activ...</a>
                                    <a href="#" class="icons_three-dots"></a>
                                </div>
                            </div>
                            <div id="articles" style="width:100%"></div>
                        </div>
                        <div class="main__articles--right">
                            
                        </div>
                    </section>
                </section>
            </section>
        </section>

        <aside class="sidebar">
                <nav class="sidebar__navigation">
                    <ul class="sidebar__navigation-list">
                        <li class="navigation__list-item">
                            <a href="#" class="navigation__list-link">
                                <div class="navigation__list-link-inner">
                                    <div class="navigation__list-left">
                                        <div class="navigation__list-image">
                                            <img src="./assets/images/profile_img.jpg" alt="">
                                        </div>
                                        <div class="navigation__list-text">
                                            <span class="navigation__list-name">მიხეილ გიგაური</span>
                                        </div>
                                    </div>
                                    <div class="navigation__list-right">
                                        <div class="navigation__list-wave"></div>
                                        <div class="navigation__list-status">
                                            <span class="status__online"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <h3 class="sidebar__navigation-title">Group Conversations</h3>
                    <ul class="sidebar__navigation-list">
                        <li class="navigation__list-item">
                            <a href="#" class="navigation__list-link">
                                <div class="navigation__list-link-inner">
                                    <div class="navigation__list-left">
                                        <div class="navigation__list-image">
                                            <img src="./assets/images/profile_img.jpg" alt="">
                                        </div>
                                        <div class="navigation__list-text">
                                            <span class="navigation__list-name">მიხეილ გიგაური</span>
                                            <span class="navigation__list-groupwith">Gio, Nick</span>
                                        </div>
                                    </div>
                                    <div class="navigation__list-right">
                                        <div class="navigation__list-status">
                                            <span class="status__online"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="sidebar__search">
                    <div class="sidebar__search-icon">
                        <span class="sidebar__search-icon-image"></span>
                    </div>
                    <form class="sidebar__search-form" action="#">
                        <input class="sidebar__search-input" type="search" placeholder="Search">
                    </form>
                    <div class="sidebar__search-icons">
                        <a href="#" class="sidebar__search-icons-inner sidebar__search-icons-options"></a>
                        <a href="#" class="sidebar__search-icons-inner sidebar__search-icons-message"></a>
                        <a href="#" class="sidebar__search-icons-inner sidebar__search-icons-group"></a>
                    </div>
                </div>
            </aside>
            <!-- /ONLINE FRIENDS SECTION -->
        </main>
        <!-- /MAIN SECTION -->`,


    article :
    `<article class="article">
    <div class="article__heading fl_jus-bet">
        <div class="article__top-left fl_center">
            <div class="article__top-author">
                <a href="#"><img src="./assets/images/author_img.jpg" alt="Author Image" class="article__top-author-img"></a>
            </div>
            <div class="article__top-text">
                <h2 class="article__top-heading"><a href="#">В мире интересного</a></h2>
                <span class="article__top-time"><a href="#">14 hrs</a></span>
            </div>
        </div>
        <div class="article__top-right fl_center">
            <a href="#" class="article__top-dots"></a>
        </div>
    </div>
    <div class="article__center fl_col">
        <div class='article__center-text' id="postText"></div>
        <div class="article__center-inner flex">
            <div class="article__center-left fl_center">
                <a href="#" class="center-left-icons left-icons-like"></a>
                <a href="#" class="center-left-icons left-icons-love"></a>
                <a href="#" class="center-left-numbers">958</a>
            </div>
            <div class="article__center-right fl_center">
                <a href="#" class="center-right-shares">43 Shares</a>
            </div>
        </div>
    </div>
    <div class="article__footer fl_col">
        <div class="article__footer-icons">
            <a href="#" class="article__footer-button fl_center">
                <span class="article__footer-icon article__footer-like">Like</span>
            </a>
            <a href="#" class="article__footer-button fl_center">
                <span class="article__footer-icon article__footer-comment">Comment</span>
            </a>
            <a href="#" class="article__footer-button fl_center">
                <span class="article__footer-icon article__footer-share">Share</span>
            </a>
        </div>
        <div class="article__footer-comment"></div>
    </div>
    </article>`,
}