## Installation instructions

Add the following env to your .env file

REACT_APP_MOVIE_DB_API_KEY=
REACT_APP_API_DOMAIN=
REACT_APP_API_BASE_IMAGE_URL=
REACT_APP_API_BASE_IMAGE_URL_REDUCED=

## WATCH FLIX

A simple movie/tv show concept application.

**UI Library – React/Styled Components**
Styled Components is chosen to simplify building reusable and flexible UI components.

**State Management**
Prop-drilling is used. Alternatively, Context could be used to avoid this, However, this comes with its own performance issues as more optimisations will have to be done to avoid unnecessary re-rendering. This is a concept application. Prop-drilling is sufficient at this scale.

**Code Quality and maintainability.**
The application is fully bootstrapped with ES-Lint, Prettier and husky to ensure code quality.

**Architecture**
The architecture/structure is made to be clear for maintainability and scalability. Raw strings are avoided at all costs and the main routes are present in the ***/pages*** directory.

## Pages.

***/Home***
The home Page is a simple Landing Page.

**/Search**
This shows a list of all the movies (both recent and searched). The search state is fully synchronised with the URL. In the is way, the link is shareable across different users.

For the synchronisation, I choose to implement the logic from scratch using ***useEffect***, ***useNavigation*** and ***useLocation*** and ***sessionStorage***.  The logic is contained in the **hooks/useResultsSync** directory. Alternatively, Aloglia’s react-instant-search can be used as it already contains a fully managed index of [https://www.themoviedb.org/](https://www.themoviedb.org/). However, for the sake of technical assessment, I decided to come off with sort of my naïve interpretation of how state-URL sync could work. For larger scale applications, the later may be more performant.

**Optimisations:**
The following optimisations have been made.

1) Lazy loading the images using ***react-lazy-load-image-component**.* Alternatively, the* lazy loading could be achieved using the lazy attribute on the html native img tag. I chose not to do this as the attribute doesn’t have general acceptance across all* browsers according to [*https://caniuse.com/loading-lazy-attr](https://caniuse.com/loading-lazy-attr)*.* Also, I need other effects like the blur effect that helps to achieve a better UX.
2) I made a performance checking using react profiler to see components that were re-rendered unnecessarily. I compared the time-to-render for both optimised and optimised versions and then decided which components needed a ***React.Memo***.
3) Animations are used in the project, but animations could be expensive too. I made use of the ***will-change*** property to tell the browser ahead of time of a possible animation.
4) Anonymous functions passed as callbacks were wrapped in a ***useCallback*** hook to ensure consistent function reference across re-renders.
5) Search is debounced to avoid making continuous api calls on each key press. The returned debounce function is memorized using a ***useCallback*** hook.

**App Layout.**
The entire app is wrapped in a layout component to which is suspended using Suspense from react. This helps to provide a better and smoother UX.
