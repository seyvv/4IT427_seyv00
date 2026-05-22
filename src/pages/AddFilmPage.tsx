import { AddFilmForm } from "../components/AddFilmForm";
import styles from "../App.module.css";

export function AddFilmPage() {
    return (
        <main>
            <h1>Přidat film</h1>
            <AddFilmForm />
        </main>
    );
}