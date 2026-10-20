import { Link } from "react-router";

export default function UserRecordListItem({
    record,
    onEdit,
    onDelete,
    onInfo,
}) {
    return (
        <div className="admin-table-row" key={record.id}>
            <Link to={`/records/${record.id}`}>
                <div className="admin-record-image">
                    <img
                        src={record.cover_url || null}
                        alt={record.artist || "Unknown artist"}
                    />
                </div>
            </Link>

            <span>{record.artist}</span>
            <span>{record.title}</span>
            <span>{record.categories?.name}</span>

            <div className="admin-actions">
                <button onClick={() => onInfo(record)}>INFO</button>
                <button onClick={() => onEdit(record)}>EDIT</button>
                <button onClick={() => onDelete(record.id)}>DELETE</button>
            </div>
        </div>
    );
}
