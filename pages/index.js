import { Divider, Table } from "antd";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../component/structure/breadcrumbs";
import FilterTable from "../component/structure/form";
import { columns } from "../utils/configs";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [applicationTypeOption, setApplicationTypeOption] = useState([]);
  const [actionTypeOption, setActionTypeOption] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((response) => {
        if (response.data.success) {
          setDataSource(response.data.result.auditLog);
          setOldData(response.data.result.auditLog);
          const unique = [
            ...new Set(
              response.data.result.auditLog.map((item) => item.applicationType)
            ),
          ];
          const temp = [];
          unique?.map((d, i) => {
            if (d) {
              temp.push({ value: d, label: d });
            }
          });
          const action_type = [
            ...new Set(
              response.data.result.auditLog.map((item) => item.actionType)
            ),
          ];
          const action_type_temp = [];
          action_type?.map((d, i) => {
            if (d) {
              action_type_temp.push({ value: d, label: d });
            }
          });
          setActionTypeOption(action_type_temp);
          setApplicationTypeOption(temp);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinish = (values) => {
    console.log(values);
    if (values.action_type && !values.application_type) {
      var newArray1 = oldData.filter(function (el) {
        return el?.actionType === values?.action_type;
      });
      setDataSource(newArray1);
    } else if (values.application_type && !values.action_type) {
      var newArray2 = oldData.filter(function (el) {
        return el?.applicationType === values?.application_type;
      });
      setDataSource(newArray2);
    } else if (values.action_type && values.application_type) {
      var newArray1 = oldData.filter(function (el) {
        return (
          el?.actionType === values?.action_type &&
          el?.applicationType === values?.application_type
        );
      });
      setDataSource(newArray1);
    } else if (values?.application_id) {
      if (values?.application_id) {
        var newArray4 = oldData.filter((d) => {
          if (d?.applicationId?.toString() === values?.application_id) {
            return d?.applicationId?.toString() === values?.application_id;
          } else if (
            d?.applicationId?.toString().includes(values?.application_id)
          ) {
            return d?.applicationId
              ?.toString()
              .includes(values?.application_id);
          }
        });
        setDataSource(newArray4);
      }
    } else if (values?.employee_name) {
      if (values?.employee_name) {
        var newArray4 = oldData.filter((d) => {
          if (d?.logId?.toString() === values?.employee_name) {
            return d?.logId?.toString() === values?.employee_name;
          } else if (d?.logId?.toString().includes(values?.employee_name)) {
            return d?.logId?.toString().includes(values?.employee_name);
          }
        });
        setDataSource(newArray4);
      }
    } else if (values.form_date && values.to_date) {
      let start = moment(values.form_date.$d).format("YYYY-MM-DD");
      let end = moment(values.to_date.$d).format("YYYY-MM-DD");
      var startDate = new Date(start);
      var endDate = new Date(end);
      var resultProductData = oldData.filter((a) => {
        var date = new Date(a.creationTimestamp);
        return date >= startDate && date <= endDate;
      });
      setDataSource(resultProductData);
    } else {
      setDataSource(oldData);
    }
  };

  return (
    <>
      {loading === true ? (
        "Record not found"
      ) : (
        <div style={{ margin: "30px 25px 25px 25px" }}>
          {/* start Breadcrumbs */}
          <Breadcrumbs />
          {/* end Breadcrumbs */}
          <Divider />
          {/* start Form filter  */}
          <FilterTable
            onFinish={onFinish}
            applicationTypeOption={applicationTypeOption}
            actionTypeOption={actionTypeOption}
          />{" "}
          {/* start form  filter  */}
          <Table
            pagination={{
              alignmentTop: "center",
              alignmentBottom: "center",
            }}
            columns={columns}
            dataSource={dataSource}
          />
          {/* end table content */}
        </div>
      )}{" "}
    </>
  );
};

export default index;
