"""empty message

Revision ID: 351af21464c5
Revises: 04a8059d670d
Create Date: 2022-11-28 20:59:23.732914

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '351af21464c5'
down_revision = '04a8059d670d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('celular', schema=None) as batch_op:
        batch_op.add_column(sa.Column('titulo', sa.String(length=500), nullable=False))
        batch_op.add_column(sa.Column('moneda', sa.String(length=5), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('celular', schema=None) as batch_op:
        batch_op.drop_column('moneda')
        batch_op.drop_column('titulo')

    # ### end Alembic commands ###
