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
    `<header class="header">
        <section class="container fl_center">
            <section class="header__inner wrapper">
                
                <div class="header__inner-left">
                    <h1 class="header__logo"><a href="#" title="Facebook - Social Network"></a></h1>
                    <form class="header__search-form" action="#">
                        <input class="header__search-input" type="search" placeholder="Search">
                        <button class="header__search-button">
                            <i class="header__search-button-icon"></i>
                        </button>
                    </form>
                </div>

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

                    <div class="header__inner-right-item right-item-third">
                        <span class="header__inner-right-border"></span>
                        <a href="#" class="header__inner-right-icons" title="Quick Help">
                            <i class="right-icons right-icons-help"></i>
                        </a>
                        <a href="#" class="header__inner-right-icons">
                            <i class="right-icons right-icons-dropdown"></i>
                        </a>
                    </div>

                </div>
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
                                        <textarea id="textarea" name="articles__post" placeholder="What's on your mind, მიხეილ?"></textarea>
                                    </form>
                                </div>
                                <div class="section-articles__post-breakline"></div>
                                <div class="section-articles__post-bottom">
                                    <a href="#" class="articles__post-bottom-icon icons_photo-video">Photo/Video</a>
                                    <a href="#" class="articles__post-bottom-icon icons_tag-friends">Tag Friends</a>
                                    <a href="#" class="articles__post-bottom-icon icons_feeling-activity">Feeling/Activ...</a>
                                    <a href="javascript:void(0)" class="articles__post-button" onclick="functions.articlePost()">Post</a>
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
                <ul class="sidebar__navigation-list" id="friendlist"></ul>
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
    </main>
    
    <div class="msgcontainer" id="chatContainer">
        <div class="msg__header">
            <span class="msg__header__name">მიხეილ მამნიაშვილი</span>
            <div class="msg__header__rightside">
                <button class="msg__header__rightside-item msg__header__rightside-vcall"></button>
                <button class="msg__header__rightside-item msg__header__rightside-call"></button>
                <button class="msg__header__rightside-item msg__header__rightside-settings"></button>
                <button class="msg__header__rightside-item msg__header__rightside-close" onclick="functions.chatClose()"></button>
            </div>
        </div>
        <div class="msg__body"></div>
        <div class="msg__textarea">
            <textarea type="text" class="msg__input" placeholder="Type a message ..."></textarea>
            <div class="msg__bottom">
                <nav class="msg__bottom-nav">
                    <ul class="msg__bottom-nav-list">
                        <li class="msg__bottom-nav-item msg__bottom-nav-photos"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-sticker"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-gif"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-emoji"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-game"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-file"></li>
                        <li class="msg__bottom-nav-item msg__bottom-nav-picture"></li>
                    </ul>
                </nav>
                <a href="#1" class="msg__bottom-nav-like msg__bottom-nav-item">
                    <svg width="16" height="16" viewBox="0 0 32 32">                      
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g style="fill: transparent; stroke: rgb(0, 132, 255); opacity: 0.2;"></g>
                                <g transform="translate(1.000000, 0.000000)">
                                    <path d="M7.195,29.2559 L0.804,29.2559 C0.362,29.2559 0,28.8939 0,28.4509 L0,13.0609 C0,12.6179 0.362,12.2559 0.804,12.2559 L7.195,12.2559 C7.637,12.2559 8,12.6179 8,13.0609 L8,28.4509 C8,28.8939 7.637,29.2559 7.195,29.2559 Z" id="Stroke-172" stroke="#0084ff" stroke-width="2"></path><path d="M15.9694,0 L15.9694,0 C14.6414,0 13.5214,0.568 13.0414,1.097 L12.4654,1.732 L12.5184,2.63 L12.8154,6.635 C12.8204,6.692 12.8074,6.749 12.7804,6.8 L9.5534,12.791 L8.1544,13.443 L6.9994,13.982 L6.9994,15.256 L6.9994,25.256 L6.9994,27.256 L8.5914,27.256 C8.7024,27.35 8.8354,27.47 8.9364,27.562 C9.1404,27.747 9.3424,27.928 9.5324,28.078 C10.4784,28.825 11.8634,29.174 12.8444,29.25 L12.9214,29.256 L12.9994,29.256 L23.3374,29.256 C25.3594,29.256 26.7824,28.521 27.5704,27.072 C28.0124,26.258 28.1384,25.438 28.0904,24.695 C28.9084,24.168 29.5624,23.33 29.7984,22.148 C29.9184,21.549 29.8984,20.985 29.7854,20.474 C30.4514,19.814 30.9374,18.865 30.9374,17.581 C30.9374,16.549 30.6654,15.739 30.2574,15.123 C30.4314,14.637 30.5364,14.081 30.5364,13.459 C30.5364,10.906 28.4954,9.256 25.3374,9.256 L21.0124,9.256 C21.1474,8.379 21.2494,7.521 21.2494,6.931 C21.2494,4.646 20.4484,1.775 18.2014,0.569 C17.4974,0.191 16.7464,0 15.9694,0 M15.9694,2 C16.3574,2 16.7974,2.085 17.2564,2.332 C18.6054,3.056 19.2494,5.021 19.2494,6.931 C19.2494,7.863 18.8974,9.829 18.7254,10.731 C18.6784,10.978 18.8684,11.256 19.1184,11.256 L25.3374,11.256 C26.2704,11.256 28.5364,11.456 28.5364,13.459 C28.5364,14.979 27.5584,15.534 27.5584,15.534 C27.5584,15.534 28.9374,15.673 28.9374,17.581 C28.9374,19.489 27.0854,19.682 27.0854,19.682 C27.0854,19.682 28.0924,20.481 27.8374,21.756 C27.5284,23.3 26.0264,23.391 25.6764,23.391 C25.6294,23.391 25.6044,23.389 25.6044,23.389 C25.6044,23.389 26.5714,24.723 25.8124,26.118 C25.5674,26.57 25.0414,27.256 23.3374,27.256 L12.9994,27.256 C12.2824,27.2 11.3154,26.937 10.7734,26.51 C10.1994,26.056 9.5134,25.256 8.9994,25.256 L8.9994,15.256 L10.6304,14.494 C10.8704,14.383 11.0674,14.197 11.1934,13.965 L14.5404,7.748 C14.7494,7.362 14.8424,6.924 14.8104,6.486 L14.5124,2.482 C14.5114,2.465 14.5114,2.453 14.5234,2.44 C14.5964,2.359 15.1744,2 15.9694,2" id="Fill-174" fill="#0084ff"></path>
                                </g>
                            </g>
                        </svg>
                </a>
            </div>
        </div>
    </div>`
    
}
