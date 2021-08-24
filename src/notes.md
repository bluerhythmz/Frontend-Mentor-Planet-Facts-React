NOTES

Layout / Structure Notes

mobile first approach

body/outermost wrapper - max-width ~90-95%

rough markup:
    <header>
        <title-wrapper>
            <h1>The Planets<h1>
            <burger-menu>
        <title-wrapper>
        <nav>
            <ul>
                <link-wrapper>
                    <list-decoration-circle>
                    <planet>
                    <arrow-icon>
                <link-wrapper>
                ...........
            <ul>
        <nav>
    <header>
    <main> 
        <info-buttons>
            <button>
            ........
        <info-buttons>
        <image-wrapper>
            <main-image/image-inner>
            <extra-image>
        <image-wrapper>
        <text-wrapper>
            <planet>
            <descriptive-text>
            <wiki-link>
        <text-wrapper>
        <extra-info-wrapper>
            <single-info-wrapper>
                <item-1>
                <item-2>
            <single-info-wrapper>
            .....................
        <extra-info-wrapper>
    <main>

    CSS Approach:
        <main> - display grid, grid template areas, change areas and columns for each breakpoint
        mobile - 1 column, tablet & desktop - 2 columns

    colors:
        white: #ffffff
        black-ish: #070724
        gray: #38384F
        light-gray: #838391
        purpleish: #6F2ED6
        greenish: #1EC2A4

    info button colors/active border colors for each planet:
        Mercury: #419EBB
        Venus: #EDA249
        Earth: #6D2ED5
        Mars: #D14C32
        Jupiter: #D83A34
        Saturn: #CD5120
        Uranus: #1EC1A2
        Neptune: #2D68F0

Rendering Data Approach -
    use data.json()
    map through data to create nav links
    nav link should create route for each planet and render its data in the page component.
    manually create page buttons then render data according to button selected

state - 
    selected button

Tools -
    Routing - React-Router-Dom
    ?styled-components
