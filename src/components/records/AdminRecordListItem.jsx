import { Link } from "react-router";

export default function AdminRecordListItem({
    record,
    onEdit,
    onDelete,
}) {
    return (
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
                <button onClick={() => onEdit(record)}>EDIT</button>
                <button onClick={() => onDelete(record.id)}>DELETE</button>
            </div>
        </div>
    );
}
