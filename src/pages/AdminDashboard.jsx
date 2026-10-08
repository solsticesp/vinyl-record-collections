import { Link } from "react-router";
import { useEffect, useState } from "react";
import { supabaseUrl, supabaseKey } from "../supabase";
import SaveRecordsModal from "../components/records/SaveRecordsModal";
import DeleteRecordModal from "../components/records/DeleteRecordModal";


export default function AdminDashboard() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(`${supabaseUrl}/records?select=*,categories(id,name)`, {
            headers: {
                apikey: supabaseKey,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRecords(data)
        })
        .catch(error => console.error(error)    
    )}, []);



    const [showSaveRecordsModal, setShowSaveRecordsModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState(null);

    const addRecordBtnHandler = () => {
        setSelectedRecord(null);
        setShowSaveRecordsModal(true);
    };

    const editRecordHandler = (record) => {
        setSelectedRecord(record);
        setShowSaveRecordsModal(true);
    };

    const deleteRecordHandler = (record) => {
        setRecordToDelete(record);
        setShowDeleteModal(true);
    }

    return (
        <div className="page admin-page">
            <section className="catalog-header">
                <div>
                    <span className="eyebrow">ADMIN</span>
                    <h1>
                        RECORD<br />
                        MANAGEMENT
                    </h1>
                </div>
                <p className="catalog-intro">
                    Manage your vinyl collection,
                    add new records, edit existing ones,
                    or remove records.
                </p>
            </section>

            <div className="admin-toolbar">
                <span>{records.length} RECORDS</span>
                <button className="add-record-btn" onClick={() => { addRecordBtnHandler() }}>
                    + ADD NEW RECORD
                </button>
            </div>

            <section className="admin-table">
                <div className="admin-table-header">
                    <span>IMAGE</span>
                    <span>ARTIST</span>
                    <span>TITLE</span>
                    <span>CATEGORY</span>
                    <span>ACTIONS</span>
                </div>

                {records.map(record => (
                    <div className="admin-table-row" key={record.id}>
                        <div className="admin-record-image">
                            <img
                                src={record.cover_url}
                                alt={record.artist}
                            />
                        </div>

                        <span>{record.artist}</span>
                        <span>{record.title}</span>
                        <span>{record.categories?.name}</span>

                        <div className="admin-actions">
                            <Link to={`/records/${record.id}`}>
                                INFO
                            </Link>
                            <button onClick={() => editRecordHandler(record)}>EDIT</button>
                            <button onClick={() => deleteRecordHandler(record)}>DELETE</button>
                        </div>
                    </div>
                ))}
            </section>

            {showSaveRecordsModal && (
                <SaveRecordsModal
                    onClose={() => setShowSaveRecordsModal(false)}
                    record={selectedRecord}
                />
            )};

            {showDeleteModal && (
                <DeleteRecordModal
                    record={recordToDelete}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={() => {
                        console.log("Delete:", recordToDelete);
                        setShowDeleteModal(false);
                    }
                    }
                />
            )}
        </div>
    );
}