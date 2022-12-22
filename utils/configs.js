import moment from "moment";

export const breadcrumbs = [
  {
    label: "Home",
    link: "/",
    current: false,
  },
  {
    label: "Administrator",
    link: "#!",
    current: false,
  },
  {
    label: "Logger Search",
    link: "/",
    current: false,
  },
];

export const columns = [
  {
    title: "Log Id",
    dataIndex: "logId",
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    sorter: (a, b) => a.logId - b.logId,
  },
  {
    title: "Application Type",
    dataIndex: "applicationType",
    sorter: (a, b) => a.applicationType - b.applicationType,
    render: (address) => (address ? address : "-/-"),
  },
  {
    title: "Application Id",
    dataIndex: "applicationId",
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    sorter: (a, b) => a.applicationId - b.applicationId,
    render: (address) => (address ? address : "-/-"),
  },
  {
    title: "Action",
    dataIndex: "actionType",
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    sorter: (a, b) => a.actionType - b.actionType,
  },
  {
    title: "Action Details",
    dataIndex: "-/-",
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    sorter: (a, b) => a.age - b.age,
    render: (address) => (address ? address : "-/-"),
  },
  {
    title: "Date : Time",
    dataIndex: "creationTimestamp",
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    render: (address) => moment(address).format("YYYY-MM-MM / hh:mm:ss"),
  },
];
