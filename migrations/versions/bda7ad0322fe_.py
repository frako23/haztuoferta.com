"""empty message

Revision ID: bda7ad0322fe
Revises: 12721a978bce
Create Date: 2022-11-21 18:55:34.454879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bda7ad0322fe'
down_revision = '12721a978bce'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('celular',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('marca', sa.String(length=50), nullable=False),
    sa.Column('modelo', sa.String(length=250), nullable=False),
    sa.Column('procesador', sa.String(length=250), nullable=False),
    sa.Column('pantalla', sa.String(length=50), nullable=False),
    sa.Column('memoria_ram', sa.String(length=50), nullable=False),
    sa.Column('memoria_rom', sa.String(length=50), nullable=False),
    sa.Column('sistema_operativo', sa.String(length=250), nullable=False),
    sa.Column('precio', sa.String(length=80), nullable=False),
    sa.Column('bateria', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('celular')
    # ### end Alembic commands ###
