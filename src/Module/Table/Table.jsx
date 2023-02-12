import { useState, useRef } from "react";
import { Table, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import AddData from "./AddTableData";
import EditData from "./EditTableData";
import { useTable } from "../../Hook/UseTable";
import SeenTableData from "./SeenTableData";

const CustomTable = (props) => {
    const {
        getData,
        tableData,
        columns,
        current,
        pageSize,
        totalItems,
        setCurrent,
        setPageSize,
        loading,
        pageSizeOptions,
        onCreate,
        onEdit,
        onDelete,
    } = props;
    const [selectedRowKeys, setSelectedRowKeys] = useState([[], []]);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const { formData } = useTable();

    const onChange = (pageNumber, page) => {
        setPageSize(page);
        setCurrent(pageNumber);
        getData(pageNumber - 1, page);
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (dataIndex, title) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Qidirish ${title}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Qidirish
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Tozalash
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const onSelectChange = (selectedRowKeys, record) => {
        setSelectedRowKeys([[...selectedRowKeys], [...record]]);
    };

    const handleSelect = (record) => {
        if (!selectedRowKeys[0].includes(record.id)) {
            setSelectedRowKeys((prev) => [
                [...prev[0], record.id],
                [...prev[1], record],
            ]);
        } else {
            setSelectedRowKeys((prev) => {
                const arr = prev[0].filter((key) => key !== record.id);
                const arr1 = prev[1].filter((key) => key.id !== record.id);
                return [[...arr], [...arr1]];
            });
        }
    };

    const rowSelection = {
        selectedRowKeys: selectedRowKeys[0],
        onChange: onSelectChange,
    };

    const arr = columns?.map((item) =>
        item.search === true
            ? { ...item, ...getColumnSearchProps(item.dataIndex, item.title) }
            : { ...item }
    );
    arr?.map((item) => delete item.search);

    const dataTableColumns = [...arr];

    return (
        <>
            <Space className="buttons" size="middle">
                <Space align="center" size={0}>
                    <div></div>
                </Space>
                <Space align="center" size="middle" className="new-buttons">
                    {formData?.seenInfo ? (
                        selectedRowKeys[0]?.length === 1 ? (
                            <SeenTableData
                                selectedRowKeys={{ ...selectedRowKeys[1][0] }}
                                editModalTitle={"Imtihon qatnashchisi"}
                            />
                        ) : null
                    ) : null}
                    {formData?.editInfo ? (
                        selectedRowKeys[0]?.length === 1 ? (
                            <EditData
                                selectedRowKeys={{ ...selectedRowKeys[1][0] }}
                                onEdit={onEdit}
                                editData={formData?.editFormData}
                                editModalTitle={formData?.editModalTitle}
                                setSelectedRowKeys={setSelectedRowKeys}
                            />
                        ) : null
                    ) : null}
                    {formData?.deleteInfo ? (
                        <Button
                            className="add-button"
                            icon={<DeleteOutlined />}
                            type="primary"
                            danger
                            onClick={() => {
                                onDelete(selectedRowKeys[0]);
                                setSelectedRowKeys([[], []]);
                            }}
                        >
                            O'chirish
                        </Button>
                    ) : null}
                    {formData?.createInfo ? (
                        <AddData
                            onCreate={onCreate}
                            formData={formData?.formData}
                            modalTitle={formData?.modalTitle}
                        />
                    ) : null}
                </Space>
            </Space>
            <Table
                rowSelection={rowSelection}
                loading={loading}
                columns={dataTableColumns}
                dataSource={tableData}
                bordered
                rowKey={"id"}
                onRow={(record) => ({
                    onClick: () => {
                        handleSelect(record);
                    },
                })}
                scroll={{
                    x: "900px",
                    y: "hidden",
                }}
                pagination={{
                    showSizeChanger: true,
                    showTotal: (total) => (
                        <span style={{ fontSize: 14, fontWeight: 600 }}>
                            Jami: {total}
                        </span>
                    ),
                    total: totalItems,
                    pageSize: pageSize,
                    current: current,
                    pageSizeOptions: pageSizeOptions,
                    onChange: onChange,
                }}
            />
        </>
    );
};

export default CustomTable;
