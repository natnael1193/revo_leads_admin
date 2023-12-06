import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import LeadService from 'src/services/LeadService';
import Pagination from '@mui/material/Pagination';

const columns: GridColDef[] = [
  {
    field: 'image',
    headerName: 'Image',
    width: 300,
    height: 200,
    renderCell: (params) => <img src={'http://127.0.0.1:8001/storage/' + params.row.image} />,
    // renderCell: (params) => console.log(params),
  },
  { field: 'name', headerName: 'Full Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  {
    field: 'phone_one',
    headerName: 'Phone One',
    width: 300,
  },
  {
    field: 'phone_two',
    headerName: 'Phone Two',
    width: 300,
  },
  {
    field: 'phone_three',
    headerName: 'Phone Three',
    width: 300,
  },
  {
    field: 'phone_four',
    headerName: 'Phone Four',
    width: 300,
  },
  {
    field: 'information_source',
    headerName: 'Information Source',
    width: 300,
  },
  {
    field: 'property_type',
    headerName: 'Property Type',
    width: 300,
  },
  {
    field: 'website',
    headerName: 'Website',
    width: 300,
  },
  {
    field: 'youtube',
    headerName: 'Youtube',
    width: 300,
  },
  {
    field: 'facebook',
    headerName: 'Facebook',
    width: 300,
  },
  {
    field: 'whatsapp',
    headerName: 'Whatsapp',
    width: 300,
  },
  {
    field: 'tiktok',
    headerName: 'Tiktok',
    width: 300,
  },
  {
    field: 'instagram',
    headerName: 'Instagram',
    width: 300,
  },
  {
    field: 'linkedin',
    headerName: 'LinkedIn',
    width: 300,
  },
];

const AllLeads = () => {
  const [page, setPage] = React.useState(1);
  const [paginate, setPaginate] = React.useState(10);

  const getLeads = useQuery({
    queryKey: ['getLeads'],
    queryFn: () => LeadService.getLeads(paginate, page),
  });

  useEffect(() => {
    getLeads.refetch();
  }, [page]);

  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };
  console.log('paginate', paginate);
  return (
    <div style={{ height: 800 }}>
      {getLeads.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DataGrid
            rows={getLeads.data.data.data}
            columns={columns}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
            // }}
            // pageSizeOptions={[5, 10]}
            // onPageSizeChange={(pageSize: number) => {
            //   // Maybe save into state
            //   setPaginate(pageSize);
            //   console.log('pageSize', pageSize);
            // }}
            // checkboxSelection
            hideFooter
          />
          <Pagination
            count={getLeads.data.data.data.length}
            page={page}
            onChange={handleChange}
            // onClick={() => getLeads.refetch()}
          />
        </>
      )}
    </div>
  );
};

export default AllLeads;
