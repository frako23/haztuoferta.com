"""empty message

Revision ID: 795371d33f79
Revises: f7073d699644
Create Date: 2022-12-07 19:19:49.794854

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '795371d33f79'
down_revision = 'f7073d699644'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('celular', schema=None) as batch_op:
        batch_op.alter_column('moneda',
               existing_type=sa.VARCHAR(length=5),
               nullable=True)

    with op.batch_alter_table('computadora', schema=None) as batch_op:
        batch_op.alter_column('moneda',
               existing_type=sa.VARCHAR(length=5),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('computadora', schema=None) as batch_op:
        batch_op.alter_column('moneda',
               existing_type=sa.VARCHAR(length=5),
               nullable=False)

    with op.batch_alter_table('celular', schema=None) as batch_op:
        batch_op.alter_column('moneda',
               existing_type=sa.VARCHAR(length=5),
               nullable=False)

    # ### end Alembic commands ###