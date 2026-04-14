import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'
import { useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'



function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate()

  if (saved.length === 0) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Saved Items
        </Typography>
        <Typography>
          You haven't saved anything yet.
        </Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Saved Items ({saved.length})
      </Typography>

      <Grid container spacing={2}>
        {saved.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.code}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {product.product_name || 'Unknown'}
                </Typography>
                <Typography color="text.secondary">
                  {product.brands || 'Unknown Brand'}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/product/${product.code}`, {
                      state: { product }
                    })
                  }
                >
                  View Details
                </Button>

                <Button
                  size="small"
                  color="error"
                  onClick={() =>
                    dispatch({ type: 'REMOVE', code: product.code })
                  }
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default SavedPage