import Card from '../components/Card';

function Home(props) {
    return (
        <div className="h-full overflow-y-auto py-10 px-5 w-full">
            <Card />
            <Card />
        </div>
    );
}

export default Home;