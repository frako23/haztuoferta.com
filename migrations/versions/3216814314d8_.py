"""empty message

Revision ID: 3216814314d8
Revises: 
Create Date: 2022-11-29 22:58:49.278164

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3216814314d8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('celular',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo', sa.String(length=250), nullable=False),
    sa.Column('marca', sa.String(length=50), nullable=False),
    sa.Column('modelo', sa.String(length=250), nullable=False),
    sa.Column('pantalla', sa.String(length=50), nullable=False),
    sa.Column('memoria_ram', sa.String(length=50), nullable=False),
    sa.Column('almacenamiento_interno', sa.String(length=50), nullable=False),
    sa.Column('sistema_operativo', sa.String(length=250), nullable=False),
    sa.Column('moneda', sa.String(length=5), nullable=False),
    sa.Column('precio', sa.String(length=80), nullable=False),
    sa.Column('bateria', sa.String(length=50), nullable=False),
    sa.Column('camara_frontal', sa.String(length=50), nullable=False),
    sa.Column('camara_trasera', sa.String(length=50), nullable=False),
    sa.Column('tipo_de_negocio', sa.String(length=80), nullable=False),
    sa.Column('nuevo_usado', sa.String(length=80), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=False),
    sa.Column('img_url', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('computadora',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo', sa.String(length=250), nullable=False),
    sa.Column('marca', sa.String(length=50), nullable=False),
    sa.Column('modelo', sa.String(length=250), nullable=False),
    sa.Column('procesador', sa.String(length=250), nullable=False),
    sa.Column('pantalla', sa.String(length=50), nullable=False),
    sa.Column('memoria_ram', sa.String(length=50), nullable=False),
    sa.Column('disco_duro', sa.String(length=50), nullable=False),
    sa.Column('sistema_operativo', sa.String(length=250), nullable=False),
    sa.Column('moneda', sa.String(length=5), nullable=False),
    sa.Column('precio', sa.String(length=80), nullable=False),
    sa.Column('tipo_de_negocio', sa.String(length=80), nullable=False),
    sa.Column('nuevo_usado', sa.String(length=80), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=False),
    sa.Column('img_url', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('lastname', sa.String(length=50), nullable=False),
    sa.Column('phone', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('compra',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo', sa.String(length=250), nullable=False),
    sa.Column('categoria', sa.String(length=250), nullable=False),
    sa.Column('oferta', sa.String(length=50), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('publicar',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author', sa.Integer(), nullable=True),
    sa.Column('titulo', sa.String(length=250), nullable=False),
    sa.Column('categoria', sa.String(length=250), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=True),
    sa.Column('oferta', sa.String(length=50), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=False),
    sa.ForeignKeyConstraint(['author'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('publicar')
    op.drop_table('compra')
    op.drop_table('user')
    op.drop_table('computadora')
    op.drop_table('celular')
    # ### end Alembic commands ###