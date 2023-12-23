// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { DropzoneArea } from 'material-ui-dropzone';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'

const FormLayoutsChatPDF = ({ onCheck, loading }) => {
  const [value, setValue] = useState('')
  return (
    <Card>
      <CardHeader title='Upload your PDF file to the platform!' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={['application/pdf']}
                dropzoneText={'Drag and drop a pdf here or click'}
                filesLimit={1}
                showAlerts={false}
                onChange={files => setValue(files)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' onClick={() => onCheck(value)} variant='contained' size='large'>
                Submit
              </Button>
              {loading ? ' loading ...' : ''}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsChatPDF
