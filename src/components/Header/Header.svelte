<script>
    import Logo from "@images/logo.svg";
</script>

<header>
    <img src={Logo} alt="logo">
    <h1>Panel spisu interwencji</h1>
    <h2>Zarządzaj potężnym spisem interwencji stworzonym przez potężny pion IT</h2>
    <div class="dividerLine" />
</header>

<style lang="scss">
    header {
        display: flex;
        flex-direction: column;

        img {
            width: 150px;
        }

        h1 {
            font: {
                size: 1.5rem;
                weight: 700;
                family: 'Montserrat'
            }
            margin-top: 3.2rem;
            color: #27272E;
        }

        h2 {
            font: {
                size: .8125rem;
                family: 'Work Sans';
            }
            margin-top: .1875rem;
            color: #7A828A;
        }

        .dividerLine {
            margin: 1.75rem 0;
            width: 20.125rem;
            height: 1px;
            background: #EDF2F7;
        }
    }
</style>